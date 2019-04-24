import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
    evt.preventDefault();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onNewContact(this.state);
    console.log(this.state);
    this.props.history.push("/");
  }

  //OnChange and OnClick are the property for calling the method handleChange and handleSubmit
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <div>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              size="40"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              size="40"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5>Image URL</h5>
            <input
              type="url"
              name="profile_picture"
              size="40"
              value={this.state.profile_picture}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default NewContact;
