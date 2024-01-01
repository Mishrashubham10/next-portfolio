import styles from './page.module.css';
import Scroll from '@/components/scroll/Scroll';
import HomePage from '@/components/home/HomePage';

export default function Home() {
  return (
    <main className={styles.home}>
      <HomePage />
      {/* <Scroll /> */}
    </main>
  );
}