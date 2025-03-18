import "./App.css";
import { useState, useEffect, createContext } from "react";
import Router from "./Router";
import { useNavigate } from "react-router";
import axios from "./Api/axios";
const AppState = createContext();
function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        header: {
          Authorization: "Bearer" + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Router />
    </AppState.Provider>
  );
}

export default App;
