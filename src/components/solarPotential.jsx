// this is the parent component that will hold the search, the address details and the results component.

import { useState } from "react";
import Search from "./search";
import Address from "./addressdetails";
import SolarEstimate from "./solarestimate";

function SolarPotential() {
  const [coordinates, setCoordinates] = useState({});
  const [isCoordinatesAvailable, setIsCoordinatesAvailable] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [resultsRendered, setResultsRendered] = useState(false);

  return (
    <>
      <Search
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        isCoordinatesAvailable={isCoordinatesAvailable}
        setIsCoordinatesAvailable={setIsCoordinatesAvailable}
        setShowResults={setShowResults}
        resultsRendered={resultsRendered}
        setResultsRendered={setResultsRendered}
      />
      <Address
        isCoordinatesAvailable={isCoordinatesAvailable}
        coordinates={coordinates}
        setShowResults={setShowResults}
        resultsRendered={resultsRendered}
        setResultsRendered={setResultsRendered}
      />
      <SolarEstimate
        showResults={showResults}
        coordinates={coordinates}
        resultsRendered={resultsRendered}
        setResultsRendered={setResultsRendered}
      />
    </>
  );
}

export default SolarPotential;
