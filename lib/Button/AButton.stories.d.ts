declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import(".").AButtonProps>;
export default _default;
interface ButtonProps {
    type: string;
    disabled: boolean;
    size: string;
    width: string;
}
export declare const Button: {
    ({ type, size, disabled, width }: ButtonProps): JSX.Element;
    args: {
        type: string;
        size: string;
        disabled: boolean;
        width: string;
    };
};
export declare const Colors: () => JSX.Element;
export declare const Disabled: () => JSX.Element;
export declare const Size: () => JSX.Element;
export declare const Width: () => JSX.Element;
