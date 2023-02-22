import classes from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageHandler = async event => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email,
          name,
          message,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      alert(data?.message);

      setMessage('');
      setName('');
      setEmail('');
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor={'email'}>Your Email</label>
            <input
              type={'email'}
              id={'email'}
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor={'name'}>Your Name</label>
            <input
              type={'text'}
              id={'name'}
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label>Your Message</label>
          <textarea
            id={'message'}
            rows={5}
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
