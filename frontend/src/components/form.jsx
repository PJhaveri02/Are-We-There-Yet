import React, { useEffect, useState } from "react";
import { dummyStartAddress, dummyFinishAddress } from "../dummy-address";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  const history = useHistory();

  const [startLocationTxt, setstartLocationTxt] = useState(
    "South Park, San Francisco, CA 94107, USA"
  );
  const [finishLocationTxt, setFinishLocationTxt] = useState(
    "Mission Bay, San Francisco, CA, USA"
  );

  const [startLocationOpt, setStartLocationOpt] = useState([]);
  const [finishLocationOpt, setFinishLocationOpt] = useState([]);

  const onstartLocationTxtInput = async (e) => {
    setstartLocationTxt(e.target.value);
  };

  const onFinishLocationTxtInput = (e) => {
    setFinishLocationTxt(e.target.value);
  };

  const handleSubmitForm = () => {
    history.push("/trip/map");
  };

  // Used to retrieve a list of places by the Google Places API when text is entered
  useEffect(() => {
    const autoComplete = [];
    dummyStartAddress.forEach((object) => {
      autoComplete.push({ address: `${startLocationTxt}${object.address}` });
    });
    setStartLocationOpt(autoComplete);
  }, [startLocationTxt, setStartLocationOpt]);

  // used to retrieve a list of places by the Google Places API when text is entered
  useEffect(() => {
    const autoComplete = [];
    dummyFinishAddress.forEach((object) => {
      autoComplete.push({ address: `${finishLocationTxt}${object.address}` });
    });
    setFinishLocationOpt(autoComplete);
  }, [finishLocationTxt, setFinishLocationOpt]);

  return (
    <div>
      <label>
        Start Location
        <input type="text" onChange={(e) => onstartLocationTxtInput(e)} />
      </label>
      <br />
      <label>
        End Location
        <input type="text" onChange={(e) => onFinishLocationTxtInput(e)} />
      </label>
      <div>
        {startLocationTxt &&
          (startLocationOpt.length > 0
            ? startLocationOpt.map((location, index) => (
                <button key={index}> {location.address} </button>
              ))
            : "None")}
        {finishLocationTxt &&
          (finishLocationOpt.length > 0
            ? finishLocationOpt.map((location, index) => (
                <button key={index}> {location.address} </button>
              ))
            : "None")}
      </div>
      <button onClick={() => handleSubmitForm()}>Enter Trip</button>
    </div>
  );
}
