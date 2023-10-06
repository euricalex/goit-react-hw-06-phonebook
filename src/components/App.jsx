import React from 'react';
import { Container } from './ContactForm/StyledContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './PhoneList/PhoneList';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <PhoneList />
        </>
      )}
    </Container>
  );
};