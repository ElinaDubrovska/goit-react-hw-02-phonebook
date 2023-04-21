import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    return (
      <Layout>
        
        <ContactForm onSave={this.addContact} />
        <ContactList items={this.state.contacts}   onDelete={this.deleteContact}/>
        {/* <GlobalStyle /> */}
      </Layout>
    );
  };
}