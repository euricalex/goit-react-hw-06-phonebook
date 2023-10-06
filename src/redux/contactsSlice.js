// В файле 'redux/contactsSlice.js'
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const getContacts = (state) => state.contacts.items;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
