import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import About from "./components/About";
import Welcoming from "./components/welcoming";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcoming />
      <About />
      <Footer />
    </div>
  );
}

export default App;
