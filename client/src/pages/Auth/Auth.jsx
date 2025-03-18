import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

// import LogIn from "../../components/LogIn/LogIn";
// import SignUp from "../../components/SignUp/SignUp";
import About from "../../components/About/About";
import styles from "./auth.module.css";

const Auth = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["SignUpSignIn-section"]}>
          <Outlet/>
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Auth;
