
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate
} from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { useContext, useEffect } from "react";
import { ContextGlobal, ContextProvider } from "./Components/utils/global.context";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });
  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
