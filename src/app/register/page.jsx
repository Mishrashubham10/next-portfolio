'use client';
import styles from './register.module.css';

const RegisterPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.json();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Register with Me.</h1>
        <div className={styles.register}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="email..." />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password..."
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn}>Register</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;