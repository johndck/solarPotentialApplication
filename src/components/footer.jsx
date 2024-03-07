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
              <Link to="/about">About</Link>
            </div>
            <div>Social media</div>

            <div>Privacy Notice</div>
            <div>T&Cs</div>
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
            <div>version 0.94 7 Mar 23</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
