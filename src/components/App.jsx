import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  };

  addContact = data => {
    const contact = {
     id: nanoid,
     name: data.name,
     number: data.number,
   };

   if (this.isDuplicate(contact)) {
     return alert(`${contact.name} is already in contacts`);
   }
   this.setState(prevState => ({
     contacts: [...prevState.contacts, data]
   }))
 
 }

 isDuplicate({ name }) {
   const { contacts } = this.state;
   const result = contacts.find((item) => item.name === name);
   return result;
 }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

changeFilter = e => { 
  this.setState({ filter: e.currentTarget.value});
};

  render() {
    const {filter} = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <Layout>
        <h2>Phonebook</h2>
        <ContactForm onSave={this.addContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList items={visibleContacts}   onDelete={this.deleteContact}/>
        
      </Layout>
    );
  };
}