import React from 'react';
import './profileui.css';

function ProfileUi(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "prof-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-box",
    src: props.imgUrl,
    alt: "profile-img"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "name"
  }, props.name), /*#__PURE__*/React.createElement("p", {
    style: {fontSize: 12, fontWeight: 'bold'},
    className: "des"
  }, props.experience), /*#__PURE__*/React.createElement("p", {
    style: {fontSize: 12, color: 'black', fontWeight: 'bold'},
    className: "des"
  }, props.designation),
  /*#__PURE__*/ !props.experience && React.createElement("p", {
    style: {fontSize: 10, color: 'white', fontWeight: 'bold'},
    className: "des"
  }, props.degree)
));
}

export default ProfileUi;