import React, { useState } from 'react';
import styled from '../ContactForm/ContactForm.module.css';
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';



const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  }

  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <input
        className={styled.input_name}
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        size='md'
        variant='outline'
        width='auto'
      />
      <input
        className={styled.input_email}
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        width='auto'
      />
      <textarea
        className={styled.message_area}
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        size='md'
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
