import { HTMLAttributes } from 'react';

export interface IconProps {
  src: string;
}
const Icon = ({ src, ...divAttributes }: IconProps & HTMLAttributes<HTMLDivElement>) => (
  <div
    {...divAttributes}
    style={{
      mask: `url("${src}") no-repeat center`,
      WebkitMask: `url("${src}") no-repeat center`,
      maskSize: 'contain',
    }}
  />
);
export default Icon;
