import { FC, HTMLAttributes } from 'react';

export interface IconProps {
  src: string;
}
const Icon: FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({ src, ...divAttributes }) => (
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
