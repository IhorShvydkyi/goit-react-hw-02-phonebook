import { Component } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmitContactForm = (data) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  handleContactsFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmitContactForm} />
        <h2>Contacts</h2>
        <Filter />
      </>
    );
  }
}

export default App;
