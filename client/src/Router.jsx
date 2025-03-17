// import { BrowserRouter, Routes, Route } from "react-router";
// import Layout from "./components/Layout/Layout";
// import Auth from "./pages/Auth/Auth"

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Home page Route */}
//             <Route path="/Auth/*" element={<Auth />}></Route>
//           {/* Question page Route */}

//           {/* Answer page Route */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Auth Routes */}
          <Route path="Auth/*" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
