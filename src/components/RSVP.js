import React from 'react';
const RsvpPage = () =>

<form action="/action_page.php">
  <span>Name</span><br/>
  <input type="text" name="firstname" value="Name"></input>
  <br/>
  <span>Email</span><br/>
  <input type="text" name="lastname" value="Email"></input>
  <br/>
  <input type="radio" name="attendign" value="yes"></input><span>Yes</span>
  <input type="radio" name="attendign" value="no"></input><span>No</span>
  <br/>
  <input type="submit" value="Submit"></input>
</form>

export default RsvpPage;