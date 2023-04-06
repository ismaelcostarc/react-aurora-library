import React from "react";
import style from "./style.module.scss";

export interface AButtonProps {
  /**
   * teste
   */
  type: string;
  disabled: boolean;
  size: string;
  width: string;
  clickCb?: () => void;
  children: React.ReactNode;
}

export const AButton = ({ type, disabled, size, width, clickCb, children }: AButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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