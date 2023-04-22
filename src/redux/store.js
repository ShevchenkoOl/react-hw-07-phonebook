import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reduce';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
