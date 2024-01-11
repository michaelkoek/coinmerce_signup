"use client";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Input } from "./input";
import { CircleIcon, CloseIcon, CheckIcon } from "../Icons";

type TPasswordRules =
    | "minLength"
    | "uppercase"
    | "lowercase"
    | "number"
    | "special";

interface IPasswordInputProps {
    name: string;
    label: string;
    rules?: TPasswordRules[];
    passwordLength?: number;
}

interface IPasswordRuleProps {
    children: ReactNode;
    isValid?: boolean;
}

const Cross = () => (
    <svg
        className="h-6 w-6 text-red-500"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="18" y1="6" x2="6" y2="18" />{" "}
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const PasswordRule = ({ isValid, children }: IPasswordRuleProps) => {
    const labelValid = () => {
        return isValid ? "text-green-600" : "text-gray-400";
    };

    return (
        <li className={`w-6/12 py-2 ${labelValid()}`}>
            <CircleIcon />
            {children}
        </li>
    );
};

export const PasswordInput = ({
    name,
    label,
    rules = [],
    passwordLength = 6,
}: IPasswordInputProps) => {
    const [toggleDisplayPassword, setToggleDisplayPassword] = useState(false);
    const [storedPassword, setStoredPassword] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);

    const validationRules = useMemo(
        () => ({
            hasUppercase: {
                isValid: /[A-Z]/.test(storedPassword),
                label: "1 uppercase character",
            },
            hasLowercase: {
                isValid: /[a-z]/.test(storedPassword),
                label: "1 lowercase character",
            },
            hasNumber: {
                isValid: /\d/.test(storedPassword),
                label: "1 number",
            },
            minLength: {
                isValid: storedPassword.length >= passwordLength,
                label: `min. ${passwordLength} characters `,
            },
            hasSpecialChar: {
                isValid: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
                    storedPassword
                ),
                label: "1 special character",
            },
        }),
        [passwordLength, storedPassword]
    );
    console.log({ validationRules });

    // Enable rules
    useEffect(() => {
        if (rules.length === 0) {
        }
    }, [rules]);

    console.log({
        storedPassword,
        validationRules: Object.entries(validationRules),
    });

    return (
        <section>
            <Input
                type={toggleDisplayPassword ? "text" : "password"}
                name={name}
                label={label}
                placeholder="Y0uRP@$$w0rD73832"
                leftElement={<div>🔒</div>}
                onChange={(event) => setStoredPassword(event.target.value)}
                rightElement={
                    <div
                        className="cursor-pointer"
                        onClick={() =>
                            setToggleDisplayPassword((prevState) => !prevState)
                        }
                    >
                        {toggleDisplayPassword ? "👓" : "🕶"}
                    </div>
                }
            />
            <section className="container pt-4">
                <ul className="flex flex-row flex-wrap">
                    {Object.entries(validationRules).map(
                        ([ruleName, ruleConfig]) => (
                            <PasswordRule
                                key={ruleName}
                                isValid={ruleConfig.isValid}
                            >
                                {ruleConfig.label}
                            </PasswordRule>
                        )
                    )}
                </ul>
            </section>
        </section>
    );
};
