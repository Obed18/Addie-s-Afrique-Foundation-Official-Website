import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/JobCard.css";
import { FiBriefcase, FiMapPin, FiClock, FiSend, FiExternalLink, FiX } from "react-icons/fi";
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

// const jobs = [
//     {
//         title: "Digital and innovation department",
//         slots: "2",
//         location: "Remote",
//         posted: "23rd May, 2026",
//         description:
//         "Responsible for identifying growth opportunities, building strategic partnerships, and driving sales to expand the company's market presence.",
//     },
//     {
//         title: "Volunteer Coordination and Engagement Department",
//         slots: "2",
//         location: "Remote",
//         posted: "23rd May, 2026",
//         description:
//         "Plans, organizes, and oversees training programs and organizational projects, ensuring they run efficiently and meet set goals.",
//     },
//     {
//         title: "Fundraising Department",
//         slots: "2",
//         location: "Remote",
//         posted: "23rd May, 2026",
//         description:
//         "Manages client financial records, processes transactions, and ensures accuracy in billing, reporting, and account reconciliation.",
//     },
//     {
//         title: "Diversity, Accessibility and Inclusion Department",
//         slots: "3",
//         location: "Remote",
//         posted: "23rd May, 2026",
//         description:
//         "Manages client financial records, processes transactions, and ensures accuracy in billing, reporting, and account reconciliation.",
//     },
//     {
//         title: "Technology department",
//         slots: "1",
//         location: "Remote",
//         posted: "23rd May, 2026",
//         description:
//         "Manages client financial records, processes transactions, and ensures accuracy in billing, reporting, and account reconciliation.",
//     },
// ];

    const JobCard = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showThankYou, setShowThankYou] = useState(false);
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
  fetchJobs();
}, []);

const fetchJobs = async () => {
  // fetch all jobs
  const { data: jobsData, error: jobsError } = await supabase
    .from("jobs")
    .select("*");

  if (jobsError) {
    console.log(jobsError);
    return;
  }

  // fetch all applications
  const { data: applicationsData, error: applicationsError } =
    await supabase
      .from("applications")
      .select("job_title");

  if (applicationsError) {
    console.log(applicationsError);
    return;
  }

  // calculate remaining slots
  const updatedJobs = jobsData.map((job) => {
    const applicationsCount = applicationsData.filter(
      (app) => app.job_title === job.title
    ).length;

    const remainingSlots =
      job.total_slots - applicationsCount;

    return {
      ...job,
      remainingSlots:
        remainingSlots > 0 ? remainingSlots : 0,
    };
  });

  setJobs(updatedJobs);
};

    const closeModal = () => setSelectedJob(null);

const handleFormSubmit = async (e) => {
  e.preventDefault();
  setFormSubmitting(true);

  const form = e.target;
  const formData = new FormData(form);

  const applicationData = {
    full_name: formData.get("Full Name"),
    email: formData.get("Email"),
    phone: formData.get("Phone"),
    interest: formData.get("Interest"),
    job_title: formData.get("Job Title"),
  };

  try {
    // 1. Save to Supabase
    const { error } = await supabase
      .from("applications")
      .insert([applicationData]);

    if (error) {
      console.log(error);
      alert("Could not save application.");
      return;
    }

    // 2. Send to Formspree
    const response = await fetch(
      "https://formspree.io/f/mredypjw",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      form.reset();

      setShowThankYou(true);
      setSelectedJob(null);

      // refresh slots
      fetchJobs();
    } else {
      alert("Formspree submission failed.");
    }
  } catch (err) {
    console.log(err);
    alert("Submission failed.");
  } finally {
    setFormSubmitting(false);
  }
};

const location = useLocation();

useEffect(() => {
    if (location.hash) {
    const target = document.getElementById(location.hash.replace("#", ""));
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
    }
}, [location]);


    return (
        <>
<div className="job-cards-section">
  {jobs.length === 0 ? (
    <motion.p
      className="no-jobs-message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      There are no career roles available at the moment, check back later.
    </motion.p>
  ) : (
    jobs.map((job, index) => (
      <motion.div
        className="job-card"
        key={index}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <h3 className="job-title" id="jobs">{job.title}</h3>
        <div className="job-meta">
          <span><FiBriefcase size={16} />Slots Left: {job.remainingSlots}</span>
          <span><FiMapPin size={16} /> {job.location}</span>
          <span><FiClock size={16} /> {job.posted}</span>
        </div>
        <p className="job-description">{job.description}</p>
        <div className="job-actions">
          <a href="mailto:info@nexagrowthafrica.org" className="link-text">
            <button className="view-details">
              <FiExternalLink size={16} /> Contact Us
            </button>
          </a>
          <button
            className="apply-now"
            disabled={job.remainingSlots === 0}
            onClick={() => {
            if (job.remainingSlots > 0) {
                setSelectedJob(job);
            }
            }}>
            <FiSend size={16} />

            {job.remainingSlots === 0
                ? "No Slots Left"
                : "Apply Now"}
            </button>
        </div>
      </motion.div>
    ))
  )}
</div>
        <AnimatePresence>
            {selectedJob && (
            <motion.div
                className="job-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                className="job-modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                >
                <div className="job-modal-header">
                    <h2>Apply for {selectedJob.title}</h2>
                    <button className="job-close-button" onClick={closeModal}><FiX size={20} /></button>
                </div>
                    <form 
                    className="job-application-form"
                    onSubmit={handleFormSubmit}
                    encType="multipart/form-data"
                    >
                    <input type="hidden" name="Job Title" value={selectedJob.title} />

                    <label>
                        Full Name <span className="job-required">*</span>
                        <input 
                        type="text" 
                        name="Full Name" 
                        required 
                        placeholder="Enter your full name" 
                        />
                    </label>

                    <label>
                        Email Address <span className="job-required">*</span>
                        <input 
                        type="email" 
                        name="Email" 
                        required 
                        placeholder="Enter your email" 
                        />
                    </label>

                    <label>
                        Contact Number <span className="job-required">*</span>
                        <input 
                        type="tel" 
                        name="Phone" 
                        required 
                        placeholder="Enter your phone number" 
                        />
                    </label>

                    {/* <label>
                        Upload Resume/CV <span className="job-required">*</span>
                        <div className="job-file-drop">
                        <input 
                            type="file" 
                            name="Resume" 
                            required 
                            accept=".pdf,.doc,.docx" 
                        />
                        </div>
                    </label> */}

                    <label>
                        Why are you interested in this role? <span className="job-required">*</span>
                        <textarea 
                        name="Interest" 
                        required 
                        placeholder="Tell us why you're a good fit..." 
                        />
                    </label>

                    <div className="bottom-button">
                        <button type="submit" disabled={formSubmitting} className="job-submit-button">{formSubmitting ? "Submitting..." : "Submit Application"}</button>
                    </div>
                    </form>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    {/* Thank You Modal */}
        <AnimatePresence>
            {showThankYou && (
    <div className="thank-you-wrapper">
        <motion.div
            className="thank-you-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <FiCheckCircle className="check-icon" />

            <h1>Thank You!</h1>
            <p>The form was submitted successfully.</p>

            <a href="/volunteer" className="back-link">
            <FiArrowLeft className="back-icon" />
            Back to Previous Page
            </a>
        </motion.div>
        </div>        )}
        </AnimatePresence>
            </>
    );
    };

    export default JobCard;
