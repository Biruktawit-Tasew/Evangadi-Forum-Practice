import React from "react";
import styles from "./howItWorks.module.css";
import {
  FaUsers,
  FaQuestionCircle,
  FaHandsHelping,
  FaBullhorn,
  FaVideo,
  FaGlobe,
  FaList,
  FaDumbbell,
} from "react-icons/fa"; // Import icons

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Join the Community",
      description:
        "Sign up for the Evangadi Forum using your Evangadi Networks Bootcamp credentials or create a new account. Connect with fellow bootcamp participants and alumni.",
      icon: <FaUsers color={"#F6863E"} />,
    },
    {
      number: 2,
      title: "Ask Questions & Share Knowledge",
      description:
        "Post your questions, share your insights, and engage in discussions related to your bootcamp projects, coding challenges, and career development.",
      icon: <FaQuestionCircle color={"#F6863E"} />,
    },
    {
      number: 3,
      title: "Get Help & Provide Support",
      description:
        "Receive assistance from experienced mentors and peers when you face coding roadblocks. Offer your expertise to help others and build your reputation.",
      icon: <FaHandsHelping color={"#F6863E"} />,
    },
    {
      number: 4,
      title: "Stay Updated & Network",
      description:
        "Stay informed about workshops, events, and job opportunities. Expand your professional network and connect with potential collaborators and employers.",
      icon: <FaBullhorn color={"#F6863E"} />,
    },
  ];

  const steps2 = [
    { icon: <FaVideo />, text: "Start by watching the lecture videos" },
    { icon: <FaGlobe />, text: "Attend the live discussion sessions" },
    { icon: <FaList />, text: "Complete the checklist items of the week" },
    { icon: <FaDumbbell />, text: "Work on the weekly exercises" },
    { icon: <FaUsers />, text: "Attend the group discussion sessions" },
  ];

  return (
    <div className={styles.howItWorksContainer}>
      <h2 className={styles.sectionTitle}>How Evangadi Forum Works</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.stepContainer}>
            <div className={styles.stepIconWrapper}>{step.icon}</div>
            <div className={styles.stepContent}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.InfoContainer}>
        <div className={styles.left}>
          <h1>How it works Introduction</h1>

          <p>
            Welcome to EVANGADI FORUM, a platform where technology enthusiasts
            connect, share, and solve problems collaboratively. Our forum is
            designed to help you find answers, contribute your knowledge, and
            engage with a community of like-minded individuals.
          </p>
        </div>
        <div className={styles.left}>
          <h1>Creating an Account</h1>
          <p>
            To become a member of our community, please click the 'Sign Up'
            button located at the top right of the page. Enter your email
            address, select a username, and create a password. You will receive
            a confirmation email to activate your account.
          </p>
        </div>
      </div>

      {/* 5 steps week */}
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Topics that we cover includes</h2>
          <p className={styles.description}>
            These five steps have been refined and perfected across numerous
            cohorts to accelerate students' journey to proficiency.
          </p>
          <div className={styles.steps2}>
            {steps2.map((step, index) => (
              <div key={index} className={styles.step}>
                <span className={styles.icon}>{step.icon}</span>
                <span className={styles.text}>{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right-side-image */}

        <div className={styles.Rightcontainer}>
          <img src="https://algorithmman.com/wp-content/uploads/2024/04/programming-languages.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
