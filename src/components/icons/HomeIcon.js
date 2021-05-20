import React from "react";
const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 16 16"
  >
    <path
      d="M12.651,5.654h0l-5.3-5.3a1.2,1.2,0,0,0-1.693,0l-5.3,5.3-.005.005a1.2,1.2,0,0,0,.8,2.039l.037,0h.211v3.9a1.4,1.4,0,0,0,1.4,1.4H4.868a.381.381,0,0,0,.381-.381V9.56a.64.64,0,0,1,.639-.639H7.112a.64.64,0,0,1,.639.639v3.06A.381.381,0,0,0,8.132,13h2.075a1.4,1.4,0,0,0,1.4-1.4V7.7h.2a1.2,1.2,0,0,0,.847-2.043Z"
      transform="translate(1.5)"
      fill={props.fill}
    />
  </svg>
);

export default HomeIcon;
