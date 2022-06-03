import { nanoid } from 'nanoid';
import types from './phonebook-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});
export const removeContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const filterContacts = name => ({
  type: types.FILTER,
  payload: name,
});
