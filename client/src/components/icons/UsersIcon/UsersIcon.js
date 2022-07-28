import React from "react";

const UsersIcon = ({ color, width, height }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
    >
      <path
        d="M64,40.3c0-6.5-4.5-12.1-10.8-14.3c2.9-2.4,4.8-6,4.8-10c0-7.2-5.8-13-13-13c-5,0-9.4,2.7-11.6,7.1C33,10,32.5,10,32,10
	s-1,0-1.4,0.1C28.4,5.7,24,3,19,3C11.8,3,6,8.8,6,16c0,4,1.9,7.7,4.8,10C4.5,28.3,0,33.8,0,40.3V49h10.9c-0.6,1.8-0.9,3.7-0.9,5.7
	V61h44v-6.3c0-2-0.3-3.9-0.9-5.7H64V40.3z M45,7c5,0,9,4,9,9c0,4.3-3,7.9-7,8.8c-0.1-6.2-4-11.5-9.5-13.7C39.1,8.6,41.9,7,45,7z
	 M43,25c0,6.1-4.9,11-11,11s-11-4.9-11-11s4.9-11,11-11S43,18.9,43,25z M19,7c3.1,0,5.9,1.6,7.5,4.1c-5.5,2.2-9.4,7.5-9.5,13.7
	c-4-0.9-7-4.5-7-8.8C10,11,14,7,19,7z M4,45v-4.7C4,34.1,9.7,29,16.8,29h0.8c0.9,3.3,2.9,6.1,5.5,8c-4.3,1.4-7.9,4.3-10.2,8H4z
	 M50,57H14v-2.3C14,46.6,20.9,40,29.4,40h5.2C43.1,40,50,46.6,50,54.7V57z M60,45h-8.8c-2.3-3.7-5.9-6.5-10.2-8c2.6-2,4.6-4.8,5.5-8
	h0.8c7,0,12.8,5.1,12.8,11.3V45z"
      />
    </svg>
  );
};

export default UsersIcon;
