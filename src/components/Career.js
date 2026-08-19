import React from 'react';
import '../styles/Careers.css'; // Import the CSS file
import JobSection from "./JobSection";
import JobFilter from "./JobFilter";
import JobCard from "./JobCard";
import WhyJoinSection from "./WhyJoinSection";
import JoinTeamSection from "./JoinTeamSection";


const Careers = () => {
  return (
    <div className="careers-container">
      <JobSection />
      <JobFilter />
      <JobCard />
      {/* <JoinTeamSection /> */}
      <WhyJoinSection />
    </div>
  );
};

export default Careers;
