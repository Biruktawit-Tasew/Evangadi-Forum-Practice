import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";

import SignUp from "./components/SignUp/SignUp";
// import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page Route */}
          <Route path="/Auth/*" element={<Auth />} />

          {/* <Route path="/" element={<Navigate to="/signup" />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* Question page Route */}

          {/* Answer page Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
