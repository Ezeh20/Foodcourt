import Container from '../Container'
import Image from '../Image'
import logo from '../../../public/logo.svg'
import styles from './Navigation.module.scss'

interface Nav {
  alt?: boolean
}

export const Navigation = ({ alt }:Nav) => {
  return (
    <header className={alt ? `${styles.header} ${styles.headerAlt}`: `${styles.header}`}>
        <Container alt>
            <nav className={styles.nav}>
              <Image src={logo} alt={'moneey app'} className={styles.imgContainer}/>
            </nav>
        </Container>
    </header>
  )
}
