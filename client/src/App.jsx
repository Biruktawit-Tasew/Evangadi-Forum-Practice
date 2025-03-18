import "./App.css";
import { useState, useEffect, createContext } from "react";
import Router from "./Router";
import axios from "./Api/axios";
const AppState = createContext();
function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
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
