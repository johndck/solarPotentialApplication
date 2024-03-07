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
            Find out how much energy you could generate from the sun
            <span className="s">.</span>
          </p>
        </div>

        <p className="heroCTA"> Simply tell us your postcode:</p>
      </div>
    </section>
  );
}

export default Herobanner;
