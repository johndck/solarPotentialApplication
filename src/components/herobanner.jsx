function Herobanner() {
  return (
    <section className="standardSectionBackground">
      <div className="container herobanner">
        <div className="heroHeadline heroText">
          <h2>
            Get clued up on <span className="s">S</span>
            <span className="o">o</span>
            <span className="l">l</span>
            <span className="a">a</span>
            <span className="r">r</span>
            <span className="r">.</span>
          </h2>
        </div>
        <div className="heroText">
          <p>
            {" "}
            Find out how much clean Solar Energy you might be able to generate
            <span className="s">.</span>
          </p>
        </div>

        <p className="heroCTA"> Enter your postcode below:</p>
      </div>
    </section>
  );
}

export default Herobanner;
