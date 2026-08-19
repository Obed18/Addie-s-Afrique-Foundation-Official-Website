import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { useForm } from "@formspree/react";
import { CheckCircle } from "lucide-react";
import "../styles/PartnerSection.css";

const PartnerSection = () => {
  const [state, handleSubmit] = useForm("mnjgbbql");

  const [showOtherAmount, setShowOtherAmount] = useState(false);
  const [showOtherPayment, setShowOtherPayment] = useState(false);
  const [currency, setCurrency] = useState("£");

  if (state.succeeded) {
    return (
      <motion.div
        className="partner-success-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="success-icon" size={60} />

        <h2>Thank You for Partnering With Us</h2>

        <p>
          Thank you for becoming a valued partner of Addie’s Afrique Foundation.
        </p>

        <p>
          Together we can transform lives and build stronger communities.
        </p>
      </motion.div>
    );
  }

  return (
    <section className="partner-wrapper">

      {/* Follow Section */}
      <motion.div
        className="follow-container"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="follow-title">Follow Us Online!</h2>

        <div className="social-row">
          <motion.a href="https://www.facebook.com/share/1RMr2KgHxY/?mibextid=wwXIfr" whileHover={{ scale: 1.15 }} className="social-icon fb">
            <Facebook size={20} />
          </motion.a>

          <motion.a href="https://x.com/AddiesAfrique?s=20" whileHover={{ scale: 1.15 }} className="social-icon x">
            <FaXTwitter size={20} />
          </motion.a>

          <motion.a href="https://www.instagram.com/addiesafriquefoundation" whileHover={{ scale: 1.15 }} className="social-icon ig">
            <Instagram size={20} />
          </motion.a>

          <motion.a href="https://www.tiktok.com/@addiesafriquefoundation" whileHover={{ scale: 1.15 }} className="social-icon tt">
            <FaTiktok size={20} />
          </motion.a>

          <motion.a href="https://youtube.com/@addiesafriquefoundationtv" whileHover={{ scale: 1.15 }} className="social-icon yt">
            <RiYoutubeLine size={20} />
          </motion.a>
        </div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="partner-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="partner-title">Become Our Partner Today</h1>
        <h2 className="partner-subtitle">Thank you for your interest in partnering with Addie’s Afrique Foundation.</h2>
        <p className="partner-description">
          Our partners help us support vulnerable children and communities through education, health, and inclusion programmes across Ghana.
        </p>
        <p className="partner-description">
          <strong>Kindly complete this form to officially join our Partners Community.</strong>
        </p>

        <form className="partner-form" onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">
            <label className="main-label">Name</label>
            <input type="text" name="name" required />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="main-label">Phone Number</label>
            <input type="tel" name="phone" required />
          </div>

          {/* WhatsApp */}
          <div className="form-group">
            <label className="main-label">WhatsApp Number</label>
            <input type="tel" name="whatsapp" />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="main-label">Email</label>
            <input type="email" name="email" required />
          </div>

          {/* Partnership Type */}
          <div className="form-group checkbox-group">
            <label className="main-label">Type of Partnership</label>

            <div className="checkbox-options">
              <label><input type="radio" name="partnershipType" value="Monthly Partner" /> Monthly Partner</label>
              <label><input type="radio" name="partnershipType" value="Quarterly" /> Quarterly Partner</label>
              <label><input type="radio" name="partnershipType" value="6 Months" /> Semi-Annual Partner (Every 6 Months)</label>
              <label><input type="radio" name="partnershipType" value="Annual Partner" /> Annual Partner</label>
            </div>
          </div>


{/* Amount */}
<div className="form-amount-group radio-group">
  <label className="main-label">Amount</label>

  {/* Currency Selector */}
  <div className="amount-top">
    <div className="currency-box">
    <span className="currency-label">Currency:</span>
    <select
      className="currency-dropdown"
      value={currency}
      name="currency" 
      onChange={(e) => setCurrency(e.target.value)}
    > 
      <option value="£">Pound (£)</option>
      <option value="$">Dollar ($)</option>
      <option value="₵">Cedi (₵)</option>
      <option value="€">Euro (€)</option>
    </select>
  </div>
  </div>

  <div className="checkbox-options">

    <label className="amount-option">
      <input
        type="radio"
        name="amount"
        value="10"
        onChange={() => setShowOtherAmount(false)}
      />
      {currency} 10
    </label>

    <label className="amount-option">
      <input
        type="radio"
        name="amount"
        value="50"
        onChange={() => setShowOtherAmount(false)}
      />
      {currency} 50
    </label>

    <label className="amount-option">
      <input
        type="radio"
        name="amount"
        value="100"
        onChange={() => setShowOtherAmount(false)}
      />
      {currency} 100
    </label>

    <label className="amount-option">
      <input
        type="radio"
        name="amount"
        value="Other"
        onChange={() => setShowOtherAmount(true)}
      />
      Other
    </label>

  </div>

  {showOtherAmount && (
    <div className="other-amount-wrapper">
      <span className="currency-symbol"> <span className="currency-label">Currency: </span>{currency}</span>
      <input
        type="number"
        name="otherAmount"
        placeholder="Enter amount"
        className="other-input"
      />
    </div>
  )}
</div>
          {/* Payment Method */}
          <div className="form-amount-group checkbox-group">
            <label className="main-label">Payment Method</label>

            <div className="checkbox-options">

              <label>
                <input
                  type="checkbox"
                  name="paymentMethod"
                  value="Mobile Money"
                  onChange={() => setShowOtherPayment(false)}
                />
                Mobile Money
              </label>

              <label>
                <input
                  type="checkbox"
                  name="paymentMethod"
                  value="International Transfer"
                  onChange={() => setShowOtherPayment(false)}
                />
                International Transfer
              </label>

              <label>
                <input
                  type="checkbox"
                  name="paymentMethod"
                  value="Other"
                  onChange={(e) => setShowOtherPayment(e.target.checked)}
                />
                Other
              </label>

            </div>

            {showOtherPayment && (
              <input
                type="text"
                name="otherPaymentMethod"
                placeholder="Please specify payment method"
                className="other-input"
              />
            )}
          </div>

          {/* Preferred Cause */}
          <div className="form-group checkbox-group">
            <label className="main-label">Preferred Cause or Project</label>

            <div className="checkbox-options">
              <label><input type="checkbox" name="cause" value="Education Support" /> Education Support</label>
              <label><input type="checkbox" name="cause" value="Health Support" /> Health Support</label>
              <label><input type="checkbox" name="cause" value="General Foundation Support" /> General Foundation Support</label>
            </div>
          </div>

          {/* Communication */}
          <div className="form-group checkbox-group">
            <label className="main-label">Communication Preferences</label>

            <div className="checkbox-options">
              <label><input type="checkbox" name="communication" value="Email updates" /> Email updates</label>
              <label><input type="checkbox" name="communication" value="WhatsApp updates" /> WhatsApp updates</label>
              <label><input type="checkbox" name="communication" value="Newsletter" /> Newsletter</label>
              <label><input type="checkbox" name="communication" value="Social media updates" /> Social media updates</label>
            </div>
          </div>

          {/* Donation Date */}
          <div className="form-group">
            <label className="main-label">Preferred Donation Date (Optional)</label>
            <input type="text" name="DonationDate" placeholder="Example: 5th, 15th, 25th of the month." />
          </div>

          {/* Consent */}
          <div className="form-group consent-box">
            <label>
              <input type="checkbox" name="consent" required />
              I confirm my interest in partnering with Addie’s Afrique Foundation and understand that my contributions will support the foundation’s charitable projects.
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
          >
            Submit
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
};

export default PartnerSection;