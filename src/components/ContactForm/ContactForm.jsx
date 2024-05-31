import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactForm.module.css';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => emailjs.init(import.meta.env.VITE_PUBLIC_KEY), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    // if (
    //   email === "" ||
    //   name === "" ||
    //   message === ""
    // ) {
    //   alert("Oops something went wrong! Check that all fields are entered.");
    //   throw "Error: Invalid Input";
    // } else {
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
        setMessage("")
      }
    };
console.log(name, email, message);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  )
}

export default ContactForm
