// this takes the returned coordinates object which has all of the address details for the selected postcode

function Address({ coordinates, isCoordinatesAvailable, setShowResults }) {
  function handleClick() {
    setShowResults(true);
  }

  return (
    <>
      {isCoordinatesAvailable && (
        <div className="addressConfirmation">
          <p>
            {" "}
            We will find you solar potential data for {
              coordinates.postcode
            } in {coordinates.admin_district}
          </p>
          <button onClick={handleClick}>let me see</button>
        </div>
      )}
    </>
  );
}

export default Address;
