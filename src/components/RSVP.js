import React from "react";
import styled from "styled-components";
import firebase from "firebase";

class RsvpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      attending: false,
      sunday: false,
      dite: "",
      success: null,
      errorMessage: false,
      guests: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.addGuest = this.addGuest.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    this.setState({
      [fieldName]: value
    });
  }

  addGuest() {
    const REQUIRED_FIELDS = ["firstName", "lastName"];

    const isValid = REQUIRED_FIELDS.reduce(
      (result, fieldName) =>
        !!this.state[fieldName] && this.state[fieldName].length > 0 && result
    );

    if (isValid) {
      // perform add and remove error in state
      this.setState({
        firstName: "",
        lastName: "",
        attending: false,
        sunday: false,
        dite: "",
        errorMessage: null,
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
    } else {
      // set an error in state
      this.setState({
        errorMessage: "You're missing a required field"
      });
    }
  }

  deleteGuest(deleteIndex) {
    this.setState({
      guests: []
        .concat(this.state.guests)
        .filter((guests, index) => index !== deleteIndex)
    });
  }

  submit(event) {
    const db = firebase.firestore();

    let results = this.state.guests.map(guests => {
      return db.collection("rsvp").add(guests);
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
        {this.state.success !== true && (
          <div className="form-wrap">
            <form className="rsvp-form" onSubmit={this.submit}>
              <label className="label-input">Your Name *</label>
              <div className="wrap-input rs1">
                <input
                  className={this.state.errorMessage ? "error" : "input"}
                  placeholder="First name"
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="wrap-input rs1">
                <input
                  className={this.state.errorMessage ? "error" : "input"}
                  placeholder="Last name"
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </div>
              <ErrorText>
                {this.state.errorMessage && this.state.errorMessage}
              </ErrorText>
              <fieldset className="group">
                <legend>Will we see you...</legend>
                <div className="toggleContainer">
                  <div className="toggle">
                    <Toggle>
                      <input
                        name="attending"
                        type="checkbox"
                        checked={this.state.attending}
                        onChange={this.handleInputChange}
                        className="onoffswitch-checkbox"
                        id="attending"
                      />
                      <label className="onoffswitch-label" htmlFor="attending">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </Toggle>
                  </div>
                  <div className="tottleLable">
                    <span>... at the Wedding?</span>
                  </div>
                </div>
                <div className="toggleContainer">
                  <div className="toggle">
                    <Toggle>
                      <input
                        name="sunday"
                        type="checkbox"
                        checked={this.state.sunday}
                        onChange={this.handleInputChange}
                        className="onoffswitch-checkbox"
                        id="sunday"
                      />
                      <label className="onoffswitch-label" htmlFor="sunday">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </Toggle>
                  </div>
                  <div className="tottleLable">
                    <span>... on the Sunday?</span>
                  </div>
                </div>
              </fieldset>
              <label className="label-input">Dietary requirements: *</label>
              <div className="wrap-input ">
                <input
                  id="message"
                  className="input"
                  placeholder="Please let us know of any special dietary requirements..."
                  name="dite"
                  type="text"
                  value={this.state.dite}
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <AddGuest className="btn" type="button" onClick={this.addGuest}>
                {this.state.guests.length > 0 && (
                  <span>
                    <i className="fas fa-plus" /> Add another Guest
                  </span>
                )}
                {this.state.guests.length === 0 && (
                  <span>
                    <i className="fas fa-plus" /> Confirm Guest
                  </span>
                )}
              </AddGuest>
              <br />
              {this.state.guests.length > 0 && (
                <table className="blueTable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Wedding?</th>
                      <th>Sunday?</th>
                      <th>Dietary requirments?</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  {this.state.guests.map((guests, index) => (
                    <tbody>
                      <tr key={index}>
                        <td>
                          {guests.firstName} {guests.lastName}
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={guests.attending}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={guests.sunday}
                            disabled
                          />
                        </td>
                        <td>{guests.dite}</td>
                        <td>
                          <EditGuest
                            className="btn"
                            type="button"
                            onClick={event => this.deleteGuest(index)}
                          >
                            <i className="fas fa-user-edit" />
                          </EditGuest>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              )}
              {this.state.guests.length > 0 && (
                <input className="addToFB" type="submit" value="Submit" />
              )}
            </form>
          </div>
        )}
        {this.state.success === true && (
          <div>
            <h3>Thanks for submitting your form</h3>
          </div>
        )}
      </RSVP>
    );
  }
}

const AddGuest = styled.button`
  background-color: #6a7c80;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  margin-bottom: 1em;
`;

const EditGuest = styled.button`
    border: none;
    font-size: 16px;
    cursor: pointer;
    display: block;
    margin: auto; 
  }
`;

const ErrorText = styled.div``;

const RSVP = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #c0cdc2;

  .toggleContainer {
    display: block;
    margin: 1em;
  }
  .toggle {
    float: left;
    clear: left;
  }

  .tottleLable {
    float: left;
    vertical-align: middle;
    color: #555555;
    font-size: 1em;
  }

  .tottleLable.span {
    color: #555555;
    font-size: 1em;
  }

  fieldset {
    width: 100%;
    outline: none;
    border: 1px solid #dddddd;
    margin-bottom: 1em;
  }

  table {
    margin-bottom: 1em;
  }

  table.blueTable {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table.blueTable td,
  table.blueTable th {
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
  }
  table.blueTable tbody td {
    font-size: 13px;
  }
  table.blueTable tr:nth-child(even) {
    background: #d0e4f5;
  }
  table.blueTable thead {
    border-bottom: 2px solid #444444;
  }
  table.blueTable thead th {
    font-size: 15px;
    font-weight: normal;
    color: #000000;
    text-align: center;
  }

  .rsvp-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .form-wrap {
    width: 790px;
    background: #fff;
    border-radius: 2em;
    padding: 5em 2em 5em 2em;
  }
  .label-input {
    font-size: 1.2em;
    color: #555555;
    line-height: 1.5;
    text-transform: uppercase;
    width: 100%;
    padding-bottom: 0.5em;
  }
  .wrap-input {
    width: 100%;
    border-radius: 0.1em;
    margin-bottom: 1em;
  }

  .rs1.wrap-input {
    width: calc((100% - 4em) / 2);
  }

  .input {
    display: block;
    width: 100%;
    background: transparent;
    font-size: 1em;
    color: #333333;
    height: 2em;
  }

  .input[type="text"] {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    border: 1px solid #dddddd;
  }

  .input[type="text"]:focus {
    box-shadow: 0 0 5px #6a7c80;
    border: 1px solid #6a7c80;
  }
  .error {
    font-size: 18px;
    color: #333333;
    width: 100%;
    line-height: 1.2;
    height: 2em;
    border: 1px solid red;
  }

  legend {
    color: #555555;
    font-size: 1em;
  }
`;

const Toggle = styled.div`
    position: relative; 
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    border: 2px solid #FFFFFF; border-radius: 50px;
}
.onoffswitch-inner {
    display: block; width: 200%; margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block; float: left; width: 50%; height: 25px; padding: 0; line-height: 25px;
    font-size: 16px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "Yes";
    padding-left: 9px;
    background-color: #EEEEEE; color: #94A68A;
}
.onoffswitch-inner:after {
    content: "No";
    padding-right: 9px;
    background-color: #EEEEEE; color: #6A7C80;
    text-align: right;
}
.onoffswitch-switch {
    display: block; width: 21px; margin: 2px;
    background: #6A7C80;
    position: absolute; top: 0; bottom: 0;
    right: 46px;
    border: 2px solid #FFFFFF; border-radius: 50px;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px; 
    background-color: #94A68A; 

input[type="submit"] {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
`;

export default RsvpPage;
