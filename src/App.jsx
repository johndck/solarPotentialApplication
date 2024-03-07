import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Results from "./pages/results";
import Error from "./pages/error";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TandC from "./pages/t&cs";
import Privacy from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/t&cs" element={<TandC />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
