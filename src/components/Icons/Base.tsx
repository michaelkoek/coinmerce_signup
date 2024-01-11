import type { ReactNode } from "react";

interface ISvgContainerProps {
    children: ReactNode;
    color: string;
    w?: number;
    h?: number;
    fill?: "none" | "currentColor";
}

export const SvgContainer = ({
    children,
    color,
    w = 12,
    h = 12,
    fill = "none",
}: ISvgContainerProps) => (
    <svg
        className={`h-6 w-6 ${color}`}
        width={w}
        height={h}
        fill={fill}
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        {children}
    </svg>
);
