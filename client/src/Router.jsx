import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import LogIn from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp";
// import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page Route */}
          <Route path="/" element={<Auth />}>
            <Route index element={<LogIn />} />
            <Route path="signin" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />

            {/* <Route path="/" element={<Navigate to="/signup" />} /> */}
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* Question page Route */}

            {/* Answer page Route */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

