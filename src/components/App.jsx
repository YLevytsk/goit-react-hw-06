import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import css from './App.module.css';

const LS_KEY = 'phonebook_contacts';

export default function App() {
  
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LS_KEY);
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

 
  const addContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

 
  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

 
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
