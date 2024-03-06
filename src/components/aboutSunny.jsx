function SunnyDetails() {
  return (
    <section className="sunnyDetailsSection">
      <div className="detailsLeft">
        <div className="contentLeft">
          <div className="detailsLeftContent">
            <h3>About Sunny Solar Estimates </h3>
            <ul>
              <li>
                Sunny retrieves data from the EU Photovolatic Geographical
                Information System (PVGIS)
                <img className="eulogo" src="/assets/eu.svg" alt="PVGIS" />
              </li>
              <li>
                Sunny assumes installed peak power of 3.5kWp. This is what the
                manufacturer declares that the solar panels can produce under
                standard conditions.
              </li>
              <li>
                The estimate is based on the assumption that you will buy the
                system rather than lease it.
              </li>
              <li>
                Sunny assumes that the panels will loose about 20% of their
                capacity.
              </li>
            </ul>
            <div className="marketingBlock"></div>
          </div>
        </div>
      </div>
      <div className="detailsRight">
        <div className="contentRight">
          <div className="detailsRightContent">
            <h3>Important caveats </h3>
            <ul>
              <li>The solar savings estimate are based on many assumptions.</li>
              <li>
                The estimate is based on the assumption that you will buy the
                system rather than lease it.
              </li>
              <li>
                The estimate is based on the assumption that you will buy the
                system rather than lease it.
              </li>
              <li>
                The estimate is based on the assumption that you will buy the
                system rather than lease it.
              </li>
            </ul>
          </div>
          <div className="marketingBlock"></div>
        </div>
      </div>
    </section>
  );
}

export default SunnyDetails;
