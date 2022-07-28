import React from "react";

const SignoutIcon = ({ color, width, height }) => {
  return (
    <svg
      fill={color}
      version="1.1"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>sign-out-line</title>
      <path
        d="M7,6H23v9.8h2V6a2,2,0,0,0-2-2H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2H7Z"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H15.63a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14.5l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
  );
};

export default SignoutIcon;
