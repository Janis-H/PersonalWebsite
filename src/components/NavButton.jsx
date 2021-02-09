import React from 'react';

const NavButton = (props) => {
  return (
    <button
      className={ props.secondary ? "secondaryBtn" : "primaryBtn"}
      onClick={() => {}}
    >
      {props.name}
    </button>
  );
};

export default NavButton;
