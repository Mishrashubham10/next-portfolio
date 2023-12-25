import Link from 'next/link';
import styles from './navbar.module.css';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <h2 className={styles.navHeader}>@shubham.</h2>
            <div className={styles.navItems}>
                <Link href="/" className={styles.navItem}>Home</Link>
                <Link href="/projects" className={styles.navItem}>Projects</Link>
                <Link href="/contact" className={styles.navItem}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    </nav>
  )
}

export default Navbar