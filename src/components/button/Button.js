import React from 'react';
import { transformClassName } from '../../core/util';
import './_button.scss';

function Button(props) {
  const { children, className = '', fullWidth, variant = 'text', size = 'md', color = 'primary', circular, disabled, staticButton, ...rest } = props;
  const nestedProps = { ...rest, disabled };

  return (
    <button {...nestedProps}
      className={transformClassName(`lb-button${fullWidth ? ' lb-button--full-width' : ''}\
                  lb-button--${variant}\
                  lb-button--${size}\
                  lb-button--${color}\
                  ${disabled ? 'lb-button--disabled' : ''}\
                  ${staticButton ? 'lb-button--static' : ''}\
                  ${circular ? 'lb-button--circular' : ''}\
                  ${className}`)}
    >
      {React.isValidElement(children)
        ? children
        : <span>{children}</span>
      }
    </button>
  );
}

export default Button;
