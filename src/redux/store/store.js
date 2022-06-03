import { createStore } from 'redux';
import phonebookReducer from '../Phonebook/phonebook-reducers';

export const store = createStore(phonebookReducer);
