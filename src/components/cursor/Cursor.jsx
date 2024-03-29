'use client';
import { useEffect, useState } from 'react';
import styles from './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ left: position.x, right: position.y }}
    ></div>
  );
};

export default Cursor;