// this takes the returned coordinates object which has all of the address details for the selected postcode

function Address({
  coordinates,
  isCoordinatesAvailable,
  setShowResults,
  resultsRendered,
  setResultsRendered,
}) {
  function handleClick() {
    setShowResults(true);
  }

  return (
    <>
      {isCoordinatesAvailable && (
        <div className="searchContentContainer">
          <div className="addressConfirmation">
            <div className="section-block"></div>
            <div className="addressConfirmationText">
              <p>
                {" "}
                Looking good 🤗 ... we have some solar potential info for{" "}
                {coordinates.postcode} in {coordinates.admin_district}.
              </p>
            </div>

            {!resultsRendered && (
              <button className="addressConfirmationBtn" onClick={handleClick}>
                🤔 show me
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Address;
