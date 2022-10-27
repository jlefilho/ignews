import Image from 'next/image'

import logoImage from '../../../public/images/logo.svg'
import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoImage} alt="" />
                <nav>
                    <a className={styles.active}>Home </a>
                    <a className={styles.active}>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}