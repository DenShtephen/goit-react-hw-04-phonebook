import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    const nameExists = contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (nameExists) {
      alert(`"${newContact.name}" is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleContactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="app-container">
        <Section title="PhoneBook">
          <ContactForm
            contacts={this.state.contacts}
            onSubmit={this.addContact}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleContactDelete}
          />
        </Section>
      </div>
    );
  }
}
