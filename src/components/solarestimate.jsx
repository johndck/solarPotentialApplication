import { useEffect } from "react";
import { useState } from "react";

function SolarEstimate({ showResults, coordinates }) {
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
              `http://localhost:3000/api/solar?lat=${lat}&long=${long}`
            );
            if (!response.ok) {
              throw new Error(`Solar Fetch error: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
            setError(null);
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
    [coordinates, showResults]
  );

  return (
    showResults && (
      <div className="solarEstimate">
        <div>Solar Estimate</div>
        {error ? (
          <p>{error}</p>
        ) : data &&
          data.outputs &&
          data.outputs.totals &&
          data.outputs.totals.fixed ? (
          <p> Total: {data.outputs.totals.fixed.E_y}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  );
}

export default SolarEstimate;
