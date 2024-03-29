import { SvgContainer } from "./Base";
import type { TIconBase } from "./Base";

interface ICloseIconProps extends TIconBase {}

export const CloseIcon = ({ color }: ICloseIconProps) => (
    <SvgContainer color={color}>
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </SvgContainer>
);
