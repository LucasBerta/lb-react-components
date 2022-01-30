import { transformClassName } from '../../core/util';
import './_badge.scss';

function Badge(props) {
  const { children, className, max = 99, variant = 'standard', overlap = 'rectangular', showZero, invisible, ...nestedProps } = props;

  function getTextToShow() {
    if (variant === 'dot') return '';

    const number = parseInt(children);
    if (typeof number !== 'number' || isNaN(number)) return children;
    if (number > max) return `${max}+`;
    return number;
  }

  return (
    <span
      {...nestedProps}
      className={transformClassName(`lb-badge
                                     lb-badge--${variant}
                                     lb-badge--overlap-${overlap}
                                     ${(!showZero && children == 0) || invisible ? 'lb-badge--invisible' : ''}
                                     ${className || ''}`)}
    >
      {getTextToShow()}
    </span>
  );
}

export default Badge;
