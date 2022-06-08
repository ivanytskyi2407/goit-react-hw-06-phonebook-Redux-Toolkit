import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { removeContact } from '../../redux/Phonebook/phoonebook-actions';

const Contacts = () => {
  const filter = useSelector(state => state.contacts.filter).toLowerCase();
  const items = useSelector(state => state.contacts.items);
  const contacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
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
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
export default Contacts;
