import React from 'react';
import styled from 'styled-components';
import firebase from "firebase";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
     email: "",
     fullname: ""
    };
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const userRef = db.collection('users').add({
      fullname: this.state.fullname,
      email: this.state.email
    });
    
    this.setState({
      fullname: "",
      email: ""
    });
  };

  render() {
    return (
        <RSVP><form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.name}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <button type="submit">Submit</button>
        </form></RSVP>
        );
      }
   }

  const RSVP = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) 
  `;

  export default User;