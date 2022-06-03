import { connect } from 'react-redux';
import s from './Contacts.module.css';
import { removeContact } from '../../redux/Phonebook/phoonebook-actions';

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <div>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              key={contact.id}
              name={contact.name}
              className={s.buttonDelete}
              type="button"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return { contacts: visibleContacts };
};
const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
