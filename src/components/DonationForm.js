import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import "../styles/DonationForm.css";

const PAYSTACK_PUBLIC_KEY = "pk_test_300b98bc2bee88838d8800987db626358f7e60c5";

const donationOptions = [
  {
    amount: 25,
    title: "Community Support",
    description: "Helps establish a new community outreach.",
    icon: <FaPeopleGroup />,
  },
  {
    amount: 50,
    title: "Education Support",
    description:
      "Provides literacy materials for the Addie's Literacy Project in rural schools.",
    icon: <FaBook />,
  },
];

export default function DonationFormSection() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);
  const [paystackReady, setPaystackReady] = useState(false);

  const formRef = useRef(null);

  // Load Paystack script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackReady(true);
    document.body.appendChild(script);
  }, []);

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(parseFloat(value) || 0);
  };

  const handleImpactClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightForm(true);
      setTimeout(() => {
        setHighlightForm(false);
      }, 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paystackReady) {
      alert("Payment gateway not ready. Please try again shortly.");
      return;
    }

    if (!fullName || !email || selectedAmount <= 0) {
      alert("Please fill in all required fields and enter a valid amount.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: selectedAmount * 100, // Paystack expects amount in pesewas
      currency: "GHS",
      ref: `DONATION_${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: fullName,
          },
          {
            display_name: "Message",
            variable_name: "message",
            value: message,
          },
          {
            display_name: "Recurring",
            variable_name: "is_recurring",
            value: isRecurring ? "Yes" : "No",
          },
        ],
      },
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <motion.div
      className="donation-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="donation-left">
        <h2>Choose Your Impact Level</h2>
        <div className="donation-options">
          {donationOptions.map((option) => (
            <motion.div
              key={option.amount}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`donation-option ${
                selectedAmount === option.amount ? "selected" : ""
              }`}
              onClick={() => handleImpactClick(option.amount)}
            >
              <div className="icon-placeholder">{option.icon}</div>
              <h3>₵{option.amount}</h3>
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="custom-input">
          <label>Or enter a custom amount:</label>
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomAmount}
            placeholder="₵ 0.00"
          />
          <label>
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={() => setIsRecurring(!isRecurring)}
            />
            Make this a monthly recurring donation
          </label>
        </div>
      </div>

      <div
        className={`donation-right ${highlightForm ? "highlight-form" : ""}`}
        ref={formRef}
      >
        <h2>Complete Your Donation</h2>
        <form className="donation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Share why you're supporting our mission..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="summary">
            <strong>Donation Summary</strong>
            <p>Amount: ₵{selectedAmount}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="donate-button"
            disabled={!paystackReady}
          >
            Donate Now
          </motion.button>

          <p className="disclaimer">
            You will be redirected to the payment page.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
