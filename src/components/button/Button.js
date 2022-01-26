import React from 'react';
import './_button.scss';

function Button(props) {
  const { children, className = '', fullWidth, variant = 'text', size = 'md', color = 'primary', circular, disabled, staticButton } = props;

  return (
    <button {...props}
      className={`lb-button${fullWidth ? ' lb-button--full-width' : ''}\
                  lb-button--${variant}\
                  lb-button--${size}\
                  lb-button--${color}\
                  ${disabled ? 'lb-button--disabled' : ''}\
                  ${staticButton ? 'lb-button--static' : ''}\
                  ${circular ? 'lb-button--circular' : ''}\
                  ${className}`.replace(/( )+/g, ' ')
      }
    >
      {React.isValidElement(children)
        ? children
        : <span>{children}</span>
      }
    </button>
  );
}

export default Button;
