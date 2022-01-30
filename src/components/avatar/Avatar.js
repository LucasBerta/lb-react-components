import { transformClassName } from '../../core/util';
import './_avatar.scss';

function Avatar(props) {
  const { className = '', src, size = 'md', variant = 'circular', children, ...nestedProps } = props;

  return (
    <div
      {...nestedProps}
      className={transformClassName(`lb-avatar
                  lb-avatar--${size}
                  lb-avatar--${variant}
                  ${className}`)}
    >
      {children || <img src={src} alt='Avatar image' className='lb-avatar__img' />}
    </div>
  )
}

export default Avatar;
