import React, { Component } from "react";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";
import ContactList from "../ContactList/ContactList";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: props.contacts };

    this.handleNewContact = this.handleNewContact.bind(this);
  }

  //remember props in setState should be in curly braces
  //{...props} passes the router props to NewContact - history, location, and match

  handleNewContact(newContact) {
    let currentState = this.state.contacts;
    let newContactList = currentState.push(newContact);
    this.setState({ newContactList });
    console.log("Test handleNewContact", this.state.contacts);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          exact
          render={props => <ContactList contacts={this.state.contacts} />}
        />
        <Route
          path="/new-contact"
          render={props => (
            <NewContact {...props} onNewContact={this.handleNewContact} />
          )}
        />
      </div>
    );
  }
}

export default App;
