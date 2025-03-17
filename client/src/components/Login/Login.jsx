// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../axiosConfig";
// import styles from "./login.module.css";
// import { BiSolidHide } from "react-icons/bi";

// function LogIn() {
//   const navigate = useNavigate();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;

//     if (!emailValue || !passValue) {
//       alert("Please provide all required information.");
//       return;
//     }

//     try {
//       await axios.post("/users/login", {
//         email: emailValue,
//         password: passValue,
//       });
//       alert("Login successful.");
//       navigate("/");
//     } catch (error) {
//       alert(error?.response?.data?.msg);
//       console.error(error.response.data);
//     }
//   }

//   return (
//     <section>
//       <div className={styles.container__wrapper}>
//         <div className={styles.login__container}>
//           <h1>Login to your account</h1>
//           <div className={styles.signup}>
//             Don’t have an account?{" "}
//             <Link to="/Auth/signup">Create a new account</Link>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className={styles.form}>
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 id="email"
//                 ref={emailDom}
//                 required
//               />
//             </div>
//             <div className={styles.form}>
//               <input
//                 className={styles.parent}
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//                 ref={passwordDom}
//                 required
//               />
//               <BiSolidHide size={30} className={styles.eye} />
//             </div>
//             <div className={styles.forget}>
//               <Link to="/Auth/signup">Forgot password?</Link>
//             </div>
//             <button type="submit" className={styles.login__button}>
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LogIn;
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import styles from "./login.module.css";
import { BiSolidHide } from "react-icons/bi";

function LogIn() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert("Please provide all required information.");
      return;
    }

    try {
      await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("Login successful.");
      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.error(error.response.data);
    }
  }

  return (
    <section>
      <div className={styles.container__wrapper}>
        <div className={styles.login__container}>
          <h1>Login to your account</h1>
          <div className={styles.signup}>
            Don’t have an account?{" "}
            <Link to="/Auth/signup">Create a new account</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <input
                type="email"
                placeholder="Email address"
                id="email"
                ref={emailDom}
                required
              />
            </div>
            <div className={styles.form}>
              <input
                className={styles.parent}
                type="password"
                placeholder="Password"
                id="password"
                ref={passwordDom}
                required
              />
              <BiSolidHide size={30} className={styles.eye} />
            </div>
            <div className={styles.forget}>
              <Link to="/Auth/signup">Forgot password?</Link>
            </div>
            <button type="submit" className={styles.login__button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
