import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactForm.module.css";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion'

const parent={
  hidden: {},
  mounted: {
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
const child={
  hidden: {
    opacity: 0,
  },
  mounted: {
    opacity: 1,
  }
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => emailjs.init(import.meta.env.VITE_PUBLIC_KEY), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    if (email === "" || name === "" || message === "") {
      alert(
        "An error has occured - Please ensure that all fields are entered correctly."
      );
      throw Error("Error - Invalid Input");
    } else {
      try {
        setSending(true);
        await emailjs.send(serviceId, templateId, {
          name: name,
          email: email,
          message: message,
        });
        alert("Email Sent!");
      } catch (error) {
        console.log(error);
      } finally {
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    }
  };
  console.log(name, email, message);

  return (
    <motion.form 
      className={styles.form} 
      onSubmit={handleSubmit}
      variants={parent}
      initial='hidden'
      animate='mounted'
    >
      <motion.input
        variants={child}
        type="text"
        placeholder="Name"
        name="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <motion.input
        variants={child}
        type="email"
        placeholder="Email"
        name="emailInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <motion.textarea
        variants={child}
        placeholder="Message"
        name="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <motion.button onClick={handleSubmit}
        variants={child}
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.9}}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
