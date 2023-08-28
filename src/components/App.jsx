import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (nameExists) {
      alert(`"${newContact.name}" is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilterChange = evt => {
    setFilter(evt.target.value);
  };

  const handleContactDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="app-container">
      <Section title="PhoneBook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleContactDelete}
        />
      </Section>
    </div>
  );
};
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div className="app-container">
//         <Section title="PhoneBook">
//           <ContactForm
//             contacts={this.state.contacts}
//             onSubmit={this.addContact}
//           />
//         </Section>
//         <Section title="Contacts">
//           <Filter filter={filter} onChange={this.handleFilterChange} />
//           <ContactList
//             contacts={filteredContacts}
//             onDeleteContact={this.handleContactDelete}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
