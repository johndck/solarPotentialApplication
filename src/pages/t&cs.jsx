import TandCbanner from "../components/abouttanc";
import { useEffect } from "react";

function TandC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TandCbanner />
    </div>
  );
}

export default TandC;
