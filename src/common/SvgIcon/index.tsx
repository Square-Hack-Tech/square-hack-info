import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img style={{mixBlendMode: 'multiply'}} src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
