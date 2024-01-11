import type { ReactNode } from "react";

interface IButton {
    type?: "submit";
    onClick?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
    isDisabled?: boolean;
    children: ReactNode;
}

export const Button = ({
    type,
    onClick,
    variant = "primary",
    isDisabled = false,
    children,
}: IButton) => {
    return (
        <button
            className="text-white font-bold w-full py-4 px-8 rounded-3xl bg-sky-500 hover:bg-sky-600 active:bg-gray-950 disabled:bg-gray-400"
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};
