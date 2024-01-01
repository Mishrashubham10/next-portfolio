import styles from './contact.module.css';
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <form className={styles.formContainer}>
        <input type="text" placeholder='Full Name' required />
        <input type="email" placeholder='Email Address...' />
        <textarea id="message" cols="30" rows="10" placeholder='Message...'></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default ContactPage;