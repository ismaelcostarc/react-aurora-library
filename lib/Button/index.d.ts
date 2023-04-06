import React from "react";
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
export declare const AButton: {
    ({ type, disabled, size, width, clickCb, children }: AButtonProps): JSX.Element;
    defaultProps: {
        type: string;
        disabled: boolean;
        size: string;
        width: string;
    };
};
