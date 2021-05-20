import React from "react";
const MinusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.class}
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    style={{ margin: "auto" }}
  >
    <rect
      width="2"
      height="12"
      rx="0.5"
      transform="translate(18 11) rotate(90)"
      fill={props.fill}
    />
  </svg>
);

export default MinusIcon;
