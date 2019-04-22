import React from "react";
import styled from "styled-components";
import firebase from "firebase";

class RsvpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      attending: true,
      sunday: true,
      dite: "",
      guests: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGuest = this.addGuest.bind(this);
    // this.deleteGuest = this.deleteGuest.bind(this);
  }

  handleInputChange(event, guestIndex) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    this.setState({
      [fieldName]: value
    });
  }

  addGuest() {
    this.setState({
      firstName: "",
      lastName: "",
      attending: true,
      sunday: true,
      dite: "",
      guests: [].concat(this.state.guests, [
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          attending: this.state.attending,
          sunday: this.state.sunday,
          dite: this.state.dite
        }
      ])
    });
  }

  // deleteGuest(index) {
  //   const deleteIndex = index;
  //   this.setState({
  //     guests: []
  //       .concat(this.state.guest)
  //       .filter((guest, index) => index !== deleteIndex)
  //   });
  // }

  handleSubmit(event) {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    let results = this.state.guests.map(guest => {
      return db.collection("rsvp").add(guest);
    });

    Promise.all(results).then(() => {
      this.setState({
        success: true
      });
    });
    event.preventDefault();
  }

  render() {
    return (
      <RSVP>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Is going:
            <input
              name="attending"
              type="checkbox"
              checked={this.state.attending}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Sunday?
            <input
              name="sunday"
              type="checkbox"
              checked={this.state.sunday}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Dietary requirments:
            <input
              name="dite"
              type="text"
              value={this.state.dite}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="button" onClick={this.addGuest}>
            Add guest
          </button>
          <br />
          <div>
            {this.state.guests.map((guest, index) => (
              <div>
                <h2>
                  {guest.firstName} {guest.lastName}
                </h2>
                <button type="button" onClick={() => this.deleteGuest(index)}>
                  Del guest
                </button>
              </div>
            ))}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </RSVP>
    );
  }
}

const RSVP = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default RsvpPage;
