import Head from "next/head";
import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <>
      <Head>
        <title>My Portfolio | Products</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="contact">
        <div className={styles.container}>
          <h1 className={styles.head}>Contact</h1>
          <div className="contact-item">
            <h1>For Any Questions</h1>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className={styles.btn}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;