import React, { useEffect, useState } from "react";
import "../styles/Filter.css";
import { supabase } from "../supabase/supabaseClient";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] =
    useState("All Departments");

  const [locationFilter, setLocationFilter] =
    useState("All Locations");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // fetch jobs
    const { data: jobsData, error: jobsError } =
      await supabase
        .from("jobs")
        .select("*");

    if (jobsError) {
      console.log(jobsError);
      return;
    }

    // fetch applications
    const {
      data: applicationsData,
      error: applicationsError,
    } = await supabase
      .from("applications")
      .select("job_title");

    if (applicationsError) {
      console.log(applicationsError);
      return;
    }

    // calculate remaining slots
    const updatedJobs = jobsData.map((job) => {
      const applicationsCount =
        applicationsData.filter(
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

    // unique departments
    const uniqueDepartments = [
      ...new Set(updatedJobs.map((job) => job.title)),
    ];

    setDepartments(uniqueDepartments);
  };

  // filtered jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.description
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All Departments" ||
      job.title === departmentFilter;

    const matchesLocation =
      locationFilter === "All Locations" ||
      job.location === locationFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesLocation
    );
  });

  // total remaining slots
  const totalRemainingSlots = filteredJobs.reduce(
    (total, job) => total + job.remainingSlots,
    0
  );

  return (
    <section className="job-filter-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for jobs, skills, or keywords..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="filters">
          {/* Department Filter */}
          <select
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
          >
            <option>All Departments</option>

            {departments.map((department, index) => (
              <option key={index}>
                {department}
              </option>
            ))}
          </select>

          {/* Location Filter */}
          <select
            value={locationFilter}
            onChange={(e) =>
              setLocationFilter(e.target.value)
            }
          >
            <option>All Locations</option>

            {[...new Set(jobs.map((job) => job.location))]
              .filter(Boolean)
              .map((location, index) => (
                <option key={index}>
                  {location}
                </option>
              ))}
          </select>

          {/* Type Filter */}
          <select>
            <option>All Types</option>

            {[...new Set(jobs.map((job) => job.job_type))]
              .filter(Boolean)
              .map((type, index) => (
                <option key={index}>
                  {type}
                </option>
              ))}
          </select>
        </div>

        <span className="positions-count">
          {totalRemainingSlots} Slots &{" "}
          {departments.length} Departments found
        </span>
      </div>
    </section>
  );
};

export default JobSection;
