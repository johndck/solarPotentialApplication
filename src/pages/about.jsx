import Aboutbanner from "../components/aboutbanner";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Aboutbanner />
    </div>
  );
}

export default About;
