import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div
      style={{
        color: "red",
        textAlign: "center",
        fontFamily: "calibiri",
        fontSize: "30px",
        border: "10px solid gray ",
        margin: "0 auto",
        width: "50%",
      }}
    >
      <div>{props.fullName}</div>
      <div>{props.bio}</div>
      <div>{props.Profession}</div>
      <div>{props.children}</div>

      <div>
        <button onClick={() => props.handleName(`My name is Houssem Jriri `)}>
          ClickMe
        </button>
      </div>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  age: PropTypes.number,
  handleName: PropTypes.func,
};
Profile.defaultProps = {
  name : "houssem"
  
}
export default Profile;
