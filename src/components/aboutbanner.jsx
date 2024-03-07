function Aboutbanner() {
  return (
    <section className="standardSectionBackground">
      <div className="container herobannerAbout">
        <div className="heroHeadline heroText">
          <h2>
            <span className="s">A</span>
            <span className="o">b</span>
            <span className="l">o</span>
            <span className="a">u</span>
            <span className="a">t</span>
            <span className="r">.</span>
          </h2>
        </div>
        <div className="heroText">
          <p>
            {" "}
            Solving the problem of solar panel capacity being mis-sold to
            consumers
            <span className="s">.</span>
          </p>
        </div>

        <p className="heroCTAAbout">
          {" "}
          We want to provide consumers with basic information about solar panels
          so they can be better informed in a negotiation with a solar panel
          installer.
        </p>
        <p className="heroCTAAbout">
          {" "}
          This is the first release of the service.
        </p>
        <p className="heroCTAAbout">
          {" "}
          We will look to capture feedback and challenges to improve the
          service.
        </p>
        <p className="heroCTAAbout">
          {" "}
          We have a number of potential data sources to improve the accuracy of
          predictions which we will be looking to integrate in the future.
        </p>
        <p className="heroCTAAbout">
          {" "}
          This idea and service has been designed and developed by John Dick.
        </p>
      </div>
    </section>
  );
}

export default Aboutbanner;
