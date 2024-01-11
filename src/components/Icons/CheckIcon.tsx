import { SvgContainer } from "./Base";
import type { TIconBase } from "./Base";

interface ICheckIconProps extends TIconBase {}

export const CheckIcon = ({ color }: ICheckIconProps) => (
    <SvgContainer color={color}>
        <polyline points="20 6 9 17 4 12" />
    </SvgContainer>
);
