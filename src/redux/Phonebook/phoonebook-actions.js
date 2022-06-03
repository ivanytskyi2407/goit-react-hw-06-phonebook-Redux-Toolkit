import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import types from './phonebook-types';

export const addContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const removeContact = createAction(types.DELETE);
export const filterContacts = createAction(types.FILTER);
