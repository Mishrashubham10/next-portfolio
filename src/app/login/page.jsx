'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = fetch("/api/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
  };

  const handleGoogle = () => {
    signIn("google");
    router.push("/");
  }

  const handleGitHub = () => {
    signIn("github");
    router.push("/");
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <button onClick={handleGoogle} className={styles.button}>
            Login with Google
          </button>
          <button onClick={handleGitHub} className={styles.button}>
            Login with GitHub
          </button>
          <input
            type="email"
            placeholder="Email Address..."
            required
            className={styles.input}
            onClick={handleInput}
          />
          <input
            type="password"
            placeholder="Password..."
            required
            className={styles.input}
            onClick={handleInput}
          />
          <button className={styles.loginBtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
