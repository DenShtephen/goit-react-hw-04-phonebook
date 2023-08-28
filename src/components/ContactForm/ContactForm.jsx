import { nanoid } from 'nanoid';
import { useState } from 'react';
import '../../index.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const id = nanoid();
    const newContact = { id, name, number };
    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Joe Biden"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces..."
        required
      />
      <input
        type="text"
        name="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="696-96-96"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}..."
        title="Phone number must be digits and can contain spaces, dashes..."
        required
      />
      <button type="submit" className="submit-button">
        Add Contact
      </button>
    </form>
  );
};
