import * as React from "react";

declare const Button: React.FC<{
  className: String,
  fullWidth: Boolean,
  size: 'sm' | 'md' | 'lg',
  variant: 'contained' | 'outlined' | 'text',
  color: 'primary' | 'accent' | 'success' | 'info',
  circular: Boolean,
  disabled: Boolean,
  staticButton: Boolean,
  onClick: Function,
  children: React.Component,
}>;

export default Button;
