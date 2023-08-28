import { nanoid } from 'nanoid';
import { Component } from 'react';
import '../../index.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const id = nanoid();
    const newContact = { id, name, number };
    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="Joe Biden"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          type="text"
          name="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
          placeholder="696-96-96"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className="submit-button">
          Add Contact
        </button>
      </form>
    );
  }
}
