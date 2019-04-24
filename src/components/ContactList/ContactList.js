import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    // console.log(this.props.contacts);
    let contactArray = this.props.contacts.map((contact, index) => {
      return <Contact contact={contact} key={index} />;
    });
    return <div className="contact-list">{contactArray}</div>;
  }
}

export default ContactList;
