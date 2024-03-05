import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Herobanner from "../components/herobanner";

function Home() {
  return (
    <div>
      <Herobanner />
      <Hero />
    </div>
  );
}
export default Home;
