function SunnyDetails() {
  return (
    <section className="sunnyDetailsSection">
      <div className="detailsLeft">
        <div className="contentLeft">
          <div className="detailsLeftContent">
            <h3>About the estimated energy info </h3>
            <ul>
              <li>
                We retrieve data live from the EU Photovolatic Geographical
                Information System (PVGIS)
                <img className="eulogo" src="/assets/eu.svg" alt="PVGIS" />
              </li>
              <li>
                We have assumed the solar panels can provide peak power of
                3.5kWp (kilowatt-peak). This is what the manufacturer declares
                that the solar panels can produce under standard conditions.
              </li>
              <li>
                We assume that the panels will lose about 20% of their capacity.
              </li>
              <li>
                This data is provided to give you an idea of the potential
                available from solar panels. There are no guarantees that full
                potential will be achieved.
              </li>
              <li>
                When you look for quotes to install solar panels keep this info
                in mind when sizing your system.
              </li>
            </ul>
            <div className="marketingBlock"></div>
          </div>
        </div>
      </div>
      <div className="detailsRight">
        <div className="contentRight">
          <div className="detailsRightContent">
            <h3>Important points to notes </h3>
            <ul>
              <li>
                The number and size of panels will impact the amount of energy
                generated.
              </li>
              <li>
                The tilt and orientation of the panels will affect the amount of
                energy generated. Typically we want panels facing directly into
                the sun.
              </li>
              <li>
                Any shading from trees or buildings can significantly reduce the
                amount of energy generated.
              </li>
              <li>
                Energy can be lost over time from panel degration, dirt and
                dust.
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
