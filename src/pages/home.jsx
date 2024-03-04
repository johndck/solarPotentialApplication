import { Link } from "react-router-dom";
import Hero from "../components/hero";

function Home() {
  return (
    <div>
      <Hero />

      <Link to="/about">About</Link>
      <Link to="/notify">Notify</Link>
      <Link to="/results">Results</Link>
    </div>
  );
}
export default Home;
