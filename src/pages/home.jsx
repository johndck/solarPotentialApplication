import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Herobanner from "../components/herobanner";
import SunnyDetails from "../components/aboutSunny";

function Home() {
  return (
    <div>
      <Herobanner />
      <Hero />
      <SunnyDetails />
    </div>
  );
}
export default Home;
