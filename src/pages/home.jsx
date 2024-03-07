import Hero from "../components/hero";
import Herobanner from "../components/herobanner";
import SunnyDetails from "../components/aboutSunny";
import Marketing from "../components/marketing";

function Home() {
  return (
    <div>
      <Herobanner />
      <Hero />
      <SunnyDetails />
      <Marketing />
    </div>
  );
}
export default Home;
