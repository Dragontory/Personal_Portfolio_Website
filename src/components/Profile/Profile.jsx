import React from "react";
import "./style.css";
import "./mediaqueries.css";
import { styles } from "../../styles";
import {resume, personalprofile, linkedin, github} from "../../constants";

const Profile = () => {
  const openResume = () => {
    window.open(resume);
  };

  const redirectToContact = () => {
    window.location.href = './#contact';
  };

  const openLinkedInProfile = () => {
    window.open('https://linkedin.com/in/toryyang', '_blank');
  };

  const openGitHubProfile = () => {
    window.open('https://github.com/dragontory', '_blank');
  };

  return (
    <section id="profile" className="container mx-auto my-16 sm:my-20">
      <div className="section__pic-container">
        <img src={personalprofile} alt="Tory Yang profile picture" />
      </div>
      <div className="section__text mt-8 sm:mt-12">
        <p className={styles.sectionSubText}>Hello, I'm</p>
        <h1 className={styles.sectionHeadText}>Tory Yang</h1>
        <p className={styles.sectionSubText}>Aspiring Computer Scientist</p>

        <div className="btn-container mt-6">
          <button className="btn btn-color-2" onClick={openResume}>
            Download Resume
          </button>
          <button className="btn btn-color-2" onClick={redirectToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container" className="mt-6">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon cursor-pointer"
            onClick={openLinkedInProfile}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon cursor-pointer ml-4"
            onClick={openGitHubProfile}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
