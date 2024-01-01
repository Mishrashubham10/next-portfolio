import Link from 'next/link'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        {/* Top Section */}
        <div className={styles.footerTop}>
            <div className={styles.info}>
                <h2 className={styles.infoHeader}>Full-Stack Web Developer</h2>
                <p className={styles.desc}>Quick Learner</p>
            </div>
            <p className={styles.email}>shubhammishra10101998@gmail.com</p>
            <p>India</p>
        </div>
        <hr className={styles.hr} />
        {/* Bottom Section */}
        <div className={styles.footerBottom}>
            <h2 className={styles.header}>@shubham</h2>
            <div className={styles.social}>
                <div className={styles.footerLink}>
                <Link href="mailto:shubhammishra10101998@gmail.com">Gmail</Link>
                <Link href="https://www.linkedin.com/in/mishrashubham10">Linkdin</Link>
                <Link href="https://twitter.com/shubham_dev_10">Twitter</Link>
                <Link href="https://github.com/mishrashubham10">Github</Link>
                <Link href="https://facebook.com/shubham74002">Facebook</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer