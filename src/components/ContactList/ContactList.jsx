import PropTypes from 'prop-types';
import '../../index.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts.map(contact => (
      <li key={contact.id} className="contact-list-item">
        {contact.name}: {contact.number}
        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
