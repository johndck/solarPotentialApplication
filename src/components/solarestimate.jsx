import { useEffect } from "react";
import { useState } from "react";
import Search from "./search";

function SolarEstimate() {
  const [data, setData] = useState(null);

  useEffect(function () {
    async function fetchSolarData() {
      const response = await fetch(
        "http://localhost:3000/api/solar?lat=52.1763&long=0.1212"
      );
      const data = await response.json();
      setData(data);
    }
    fetchSolarData();
  }, []);

  return (
    <div className="solarEstimate">
      <div>Solar Estimate</div>
      {data &&
      data.outputs &&
      data.outputs.totals &&
      data.outputs.totals.fixed ? (
        <p> Total: {data.outputs.totals.fixed.E_y}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SolarEstimate;
