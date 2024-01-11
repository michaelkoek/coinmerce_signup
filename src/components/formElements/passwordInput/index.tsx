"use client";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Input } from "../input";
import { CircleIcon, CloseIcon, CheckIcon } from "../../Icons";

type TPasswordRules =
    | "minLength"
    | "uppercase"
    | "lowercase"
    | "number"
    | "specialChar";

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

const PasswordRule = ({ isValid, children }: IPasswordRuleProps) => {
    const validState = () => {
        return isValid ? "text-green-600" : "text-gray-400";
    };

    const ValidStateIcon = isValid ? CheckIcon : CircleIcon;

    return (
        <li
            className={`w-6/12 py-2 ${validState()} flex flex-row gap-2 items-center`}
        >
            <ValidStateIcon />
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

    const validationRules = useMemo(() => {
        const defaultRules: Record<
            TPasswordRules,
            { isValid: boolean; label: string }
        > = {
            uppercase: {
                isValid: /[A-Z]/.test(storedPassword),
                label: "1 uppercase character",
            },
            lowercase: {
                isValid: /[a-z]/.test(storedPassword),
                label: "1 lowercase character",
            },
            number: {
                isValid: /\d/.test(storedPassword),
                label: "1 number",
            },
            minLength: {
                isValid: storedPassword.length >= passwordLength,
                label: `min. ${passwordLength} characters `,
            },
            specialChar: {
                isValid: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
                    storedPassword
                ),
                label: "1 special character",
            },
        };

        const containerDefaultRules = Object.entries(defaultRules);

        const enabledRules =
            rules.length === 0
                ? containerDefaultRules
                : containerDefaultRules.filter((validationRule) =>
                      rules.includes(validationRule[0] as TPasswordRules)
                  );

        return enabledRules;
    }, [passwordLength, rules, storedPassword]);

    console.log({
        storedPassword,
        validationRules,
        validationRulesEntries: Object.entries(validationRules),
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
                    {validationRules.map(([ruleName, ruleValue]) => (
                        <PasswordRule
                            key={ruleName}
                            isValid={ruleValue.isValid}
                        >
                            {ruleValue.label}
                        </PasswordRule>
                    ))}
                </ul>
            </section>
        </section>
    );
};
