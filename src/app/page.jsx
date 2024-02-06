import styles from './page.module.css';
import Scroll from '@/components/scroll/Scroll';
import HomePage from '@/components/home/HomePage';
import Cursor from '@/components/cursor/Cursor';

export default function Home() {
  return (
    <main className={styles.home}>
      <Cursor />
      <HomePage />
      {/* <Scroll /> */}
    </main>
  );
}