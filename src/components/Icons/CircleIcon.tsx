import { SvgContainer } from "./Base";
import type { TIconBase } from "./Base";

interface ICircleIconProps extends TIconBase {}

export const CircleIcon = ({ color, h = 4, w = 4 }: ICircleIconProps) => (
    <SvgContainer color={color} fill="currentColor" h={h} w={w}>
        <circle cx="12" cy="12" r="10" />
    </SvgContainer>
);
