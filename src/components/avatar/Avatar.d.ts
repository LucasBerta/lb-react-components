import * as React from "react";

declare const Avatar: React.FC<{
  className: String,
  src: String,
  size: 'sm' | 'md' | 'lg',
  variant: 'circular' | 'rounded' | 'square',
}>;

export default Avatar;
