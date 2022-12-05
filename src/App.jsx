
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/contact" element={ [<Navbar/> , <Contact/> , <Footer/>] }/>
          <Route path="/detail" element={ [<Navbar/> , <Detail/> , <Footer/>] }/>
          <Route path="/favs" element={ [<Navbar/> , <Favs/> , <Footer/>] }/>
          <Route path="/" element={ [<Navbar/> , <Home/> , <Footer/>] }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
