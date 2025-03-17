// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./signup.module.css";

// const SignUp = () => {
//   return (
//     <div className={styles.animatedContainer}>
//       <div className={styles.signupContainer}>
//         <h4>Join the network</h4>
//         <small>
//           Already have an account? <Link to="/Auth/login">Sign In</Link>
//         </small>
//         <form>
//           <input type="email" placeholder="Email address" />
//           <div>
//             <input type="text" placeholder="First name" />
//             <input type="text" placeholder="Last name" />
//           </div>
//           <input type="password" placeholder="Password" />
//           <button type="submit">Agree and Join</button>
//           <small>
//             I agree to the <Link to="/privacy">privacy policy</Link> and{" "}
//             <Link to="/terms">terms of use</Link>
//           </small>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";

const SignUp = () => {
  return (
    <div className={styles.animatedContainer}>
      <div className={styles.signupContainer}>
        <h4>Join the network</h4>
        <small>
          Already have an account? <Link to="/Auth/login">Sign In</Link>
        </small>
        <form>
          <input type="email" placeholder="Email address" />
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="password" placeholder="Password" />
          <button type="submit">Agree and Join</button>
          <small>
            I agree to the <Link to="/privacy">privacy policy</Link> and{" "}
            <Link to="/terms">terms of use</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
