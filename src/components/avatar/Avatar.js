import './_avatar.scss';

function Avatar(props) {
  const { className = '', src, size = 'md', variant = 'circular', children } = props;
  return (
    <div
      {...props}
      className={`lb-avatar
                  lb-avatar--${size}
                  lb-avatar--${variant}
                  ${className}`}
    >
      {children || <img src={src} alt='Avatar image' className='lb-avatar__img' />}
    </div>
  )
}

export default Avatar;