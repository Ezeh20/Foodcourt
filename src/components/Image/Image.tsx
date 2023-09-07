import styles from './Image.module.scss'
import { ImageType } from './type'

export const Image = ({src, alt, className, ...props}:ImageType) => {
  return (
    <div className={`${styles.main} ${className}`}>
        <img src={src} alt={alt} {...props} />
    </div>
  )
}
