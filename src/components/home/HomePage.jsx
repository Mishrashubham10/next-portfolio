import Image from 'next/image'
import styles from './home.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.left}>
          <h1 className={styles.leftHeading}>Welcome.</h1>
          <p className={styles.leftDesc}>
            My name is Shubham Mishra, I&apos;m a full-stack developer based in Mumbai , India. I have developed many types of Full-Mern-Stack projects from a Todo App to Blog Creating App, Workout App, and E-commerce sites.
          </p>
          <p className={styles.leftDesc}>I&apos;m passionate about learning new technologies and especially AI.</p>
          </div>
          <div className={styles.right}>
            <div className={styles.line}></div>
            <h1 className={styles.rightHeading}>Projects</h1>
            <Link href="/" className={styles.project}>Blog App</Link>
            <Link href="/" className={styles.project}>Blog App</Link>
            <Link href="/" className={styles.project}>Blog App</Link>
            <Link href="/" className={styles.project}>Blog App</Link>
          </div>
        </div>
    </div>
  )
}

export default HomePage