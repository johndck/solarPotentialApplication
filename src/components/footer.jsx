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
                <form className="signupForm">
                  <label htmlFor="email">Email address:</label>
                  <input
                    className="contactEmail"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                  <button className="contact-submit" type="submit">
                    Sign up for updates
                  </button>
                </form>
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
