import React, { useMemo } from "react";
import style from "./style.module.scss";

export const AButton = ({ type, disabled, size, width, clickCb, children }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    clickCb && clickCb();
  };

  const className = `
  ${style.button}
  ${style["button--" + type]} 
  ${style["button--" + size]} 
  ${style["button--" + width]} 
  ${disabled && style["button--disabled"]} 
  `;

  return (
    <>
      <button className={className} disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

AButton.defaultProps = {
  type: "default",
  disabled: false,
  size: "medium",
  width: "children",
};
