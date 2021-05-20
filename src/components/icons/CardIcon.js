import React from "react";
const CardIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 16 16"
  >
    <g transform="translate(0 2)">
      <path
        d="M16,2.594V1.75A1.75,1.75,0,0,0,14.25,0H1.75A1.75,1.75,0,0,0,0,1.75v.844a.156.156,0,0,0,.156.156H15.844A.156.156,0,0,0,16,2.594Z"
        transform="translate(0 0)"
        fill={props.fill}
      />
      <path
        d="M1.75,7.25A1.751,1.751,0,0,1,0,5.5V.157A.157.157,0,0,1,.157,0H15.844A.157.157,0,0,1,16,.157V5.5a1.751,1.751,0,0,1-1.75,1.75Z"
        transform="translate(0 3.75)"
        fill={props.fill}
      />
    </g>
    <g transform="translate(0 2)">
      <path
        d="M16,2.594V1.75A1.75,1.75,0,0,0,14.25,0H1.75A1.75,1.75,0,0,0,0,1.75v.844a.156.156,0,0,0,.156.156H15.844A.156.156,0,0,0,16,2.594Z"
        transform="translate(0 0)"
        fill={props.fill}
      />
      <path
        d="M1.75,7.25A1.751,1.751,0,0,1,0,5.5V.157A.157.157,0,0,1,.157,0H15.844A.157.157,0,0,1,16,.157V5.5a1.751,1.751,0,0,1-1.75,1.75Z"
        transform="translate(0 3.75)"
        fill={props.fill}
      />
    </g>
  </svg>
);

export default CardIcon;
