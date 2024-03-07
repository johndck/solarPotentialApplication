import Privacybanner from "../components/aboutPrivacy";
import { useEffect } from "react";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Privacybanner />
    </div>
  );
}

export default Privacy;
