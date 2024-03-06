import { useEffect } from "react";
import { useState } from "react";

function SolarEstimate({
  showResults,
  coordinates,
  resultsRendered,
  setResultsRendered,
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchSolarData() {
        if (
          coordinates &&
          "latitude" in coordinates &&
          "longitude" in coordinates &&
          showResults
        ) {
          try {
            let lat = coordinates.latitude;
            let long = coordinates.longitude;
            const response = await fetch(
              `${
                import.meta.env.VITE_API_URL
              }/api/solar?lat=${lat}&long=${long}`
            );
            if (!response.ok) {
              throw new Error(`Solar Fetch error: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
            setError(null);
            setResultsRendered(true);
          } catch (error) {
            if (error.name === "TypeError") {
              setError(
                "Sorry, there is no Internet connection. Please refresh the page."
              );
            } else {
              setError(error.toString());
            }
          }
        } else if (!showResults) {
          setData(null);
        }
      }
      fetchSolarData();
    },
    [coordinates, showResults, setResultsRendered]
  );

  return (
    showResults && (
      <div className="searchContentContainer">
        <div className="section-block"></div>
        <div className="addressConfirmation">
          <div className="solarEstimate">
            <h3>Estimated energy from Solar: </h3>
            {error ? (
              <p>{error}</p>
            ) : data &&
              data.outputs &&
              data.outputs.totals &&
              data.outputs.totals.fixed ? (
              <div>
                <p>
                  {" "}
                  Yearly PV energy: {data.outputs.totals.fixed.E_y}kWh
                  (potential)
                </p>
                <p>
                  {" "}
                  Monthly PV energy: {data.outputs.totals.fixed.E_m}
                  kWh (potential)
                </p>
                <p>Yearly Irradiance: {data.outputs.totals.fixed["H(i)_y"]}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default SolarEstimate;
