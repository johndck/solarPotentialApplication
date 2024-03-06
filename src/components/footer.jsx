import EmailForm from "./submitemail";

function Footer() {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="footerContent">
          <div className="coreFooterGrid">
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>Privacy Notice</div>
            <div>T&Cs</div>
          </div>

          <div className="contact-grid">
            <div>
              <div>
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
            <div>version 0.93 6 Mar 23</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
