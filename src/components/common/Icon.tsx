import { FC, HTMLAttributes } from 'react';

export interface IconProps {
  src: string;
}

const Icon: FC<IconProps & HTMLAttributes<HTMLElement>> = ({ src, ...iAttributes }) => (
  <i
    {...iAttributes}
    style={{
      mask: `url("${src}") no-repeat center`,
      WebkitMask: `url("${src}") no-repeat center`,
      maskSize: 'contain',
    }}
  />
);
export default Icon;
