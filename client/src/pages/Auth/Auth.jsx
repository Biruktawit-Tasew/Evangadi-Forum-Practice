import React from "react";
import { Route, Routes } from "react-router";
import LogIn from "../../components/LogIn/LogIn";
import SignUp from "../../components/SignUp/SignUp";
import About from "../../components/About/About";
import styles from "./auth.module.css";

const Auth = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["SignUpSignIn-section"]}>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>

 
  );
};

export default Auth;
