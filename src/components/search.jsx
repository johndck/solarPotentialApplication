import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function isValidPostcode(input) {
  const regex = /^[A-Za-z][A-Za-z0-9 ]*$/;
  return regex.test(input);
}

function Search() {
  // detects input box changes from the user
  // holds an array of postcode results from the API
  const [input, setInput] = useState("");
  const [postcodes, setPostcodes] = useState([]);
  const [selectedPostcode, setSelectedPostcode] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPostcodes = async () => {
      console.log(input);
      if (input.length >= 3 && isValidPostcode(input)) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/auto?code=${input}`
          );
          const data = await response.json();
          if (data.status === 200) {
            if (data.result === null) {
              setErrorMessage("Wrong postcode format");
              setPostcodes([]);
            } else {
              setPostcodes(data.result);
              setErrorMessage(""); // Clear the error message if the request was successful
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchPostcodes();
  }, [input]);

  async function handlePostcodeClick(postcode) {
    setSelectedPostcode(postcode);
    setPostcodes([]);
    setInput(postcode);

    try {
      const response = await fetch(
        `http://localhost:3000/api/getLat?postcode=${postcode}`
      );
      const data = await response.json();
      if (data.status === 200) {
        if (data.result === null) {
          setErrorMessage("Wrong postcode format");
        } else {
          setCoordinates(data.result);
          console.log(`Your selected postcode was: ${selectedPostcode}`);
          console.log(
            `Coordinates for ${postcode}: ${data.result.latitude}, ${data.result.longitude}`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        maxLength={8}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
          setSelectedPostcode("");
          if (event.target.value === "") {
            setPostcodes([]);
            setErrorMessage("");
          }
        }}
        placeholder="enter your postcode"
      />

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {input.length >= 3 && postcodes.length > 0 && !selectedPostcode && (
        <div className="dropdown">
          {postcodes.map((postcode, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handlePostcodeClick(postcode)}
            >
              {postcode}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
