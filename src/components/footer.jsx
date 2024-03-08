import EmailForm from "./submitemail";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="footerContent">
          <div className="coreFooterGrid">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                About
              </Link>
            </div>
            <div>
              <ul className="social">
                <li>
                  <img src="/assets/insta.svg" alt="Instagram" />
                </li>
                <li>
                  <img src="/assets/tt.svg" alt="TikTok" />
                </li>
                <li>
                  <img src="/assets/x.svg" alt="X formerly Twitter" />
                </li>
              </ul>
            </div>

            <div>
              <Link to="/t&cs" onClick={() => window.scrollTo(0, 0)}>
                T&CS
              </Link>
            </div>
            <div>
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                Privacy
              </Link>
            </div>
          </div>

          <div className="contact-grid">
            <div>
              <div className="emailFormHolder">
                <EmailForm />
              </div>
            </div>
            <div className="footerGBcontainer">
              <div>
                <img
                  className="footerGB"
                  src="/assets/madeinUK.png"
                  alt="Website made in the UK"
                />
              </div>
            </div>
          </div>

          <div className="footerLogo">
            <img src="/assets/Sunny.svg" alt="Image 1" />
            <div>version 0.97 8 Mar 24</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
