import React from "react";
import Profile from "./profile/profile";
import logo from "./logo.svg";
import PropTypes from "prop-types";

import "./App.css";

function App() {
  const  handleName = (name) => alert(name);

  return (
    <div className="App">
      <Profile
        fullName="Houssem Jriri"
        bio="2"
        Profession="developer"
        handleName={ handleName}
      >
        <img src="tmp_cropped_avatar.jpg" alt="photo of profile" />
      </Profile>
    </div>
  );
}
Profile.defaultProps = {
  name: "houssem",
};

export default App;
