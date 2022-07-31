import React from "react";
import ReactCountryFlag from 'react-country-flag'

const Bottom = () => {
  return (
    <>
      <img className="bottom-corner" src="./Star2.png" alt="star"></img>
      <p className="kayanyazi">
        <span>
          <b>Rushil joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min ago &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; <b>Ansh joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min ago
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b>Pat joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min
          ago &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b>Rushil joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg />
          1 min ago &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b>Ansh
          joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min ago &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <b>Pat joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min ago &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; <b>Rushil joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min ago
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b>Ansh joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1 min
          ago &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <b>Pat joined</b> <ReactCountryFlag className="bottom-country-flag" countryCode={"CA"} svg /> 1
          min ago &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
    </>
  );
};

export default Bottom;
