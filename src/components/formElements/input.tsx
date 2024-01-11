import type { ReactNode, ChangeEvent } from "react";

interface IInput {
    name: string;
    label: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: "password" | "text" | "email" | "number";
    placeholder?: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
}

export const Input = ({
    type = "text",
    name,
    placeholder,
    label,
    leftElement,
    rightElement,
    onChange,
}: IInput) => {
    return (
        <section className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                {leftElement && (
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 pl-4">
                        {leftElement}
                    </div>
                )}
                <input
                    className={`p-4 ${leftElement ? "pl-10" : ""} ${
                        rightElement ? "pr-8" : ""
                    } rounded-md border-2 border-gray-400 active:border-gray-800 w-full`}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {rightElement && (
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 pr-3 z-1">
                        {rightElement}
                    </div>
                )}
            </div>
        </section>
    );
};
