import React, { useState } from "react";


function Sighting() {
  const [date, setDate] = useState('');
  const [indId, setIndId] = useState('');
  const [location, setLocation] = useState('');
  const [health, setHealth] = useState('');
  const [email, setEmail] = useState('');
  const [timestamp, setTimestamp] = useState('');
  // const []
  const collectData = () => {
    e.preventDefault();
    const newSighting = {date: date, indId: indId, location: location, health: health, email: email, timestamp: timestamp}
    // need add post function

    setDate('');
    setIndId('');
    setLocation('');
    setHealth('');
    setEmail('');
    setTimestamp('');
  }
  return (
    <div>
      <form onSubmit={collectData}>
        <fieldset>
          <label for='date'>Date</label>
          <input id='date' name='date' value={date}></input>
        </fieldset>
    
        <fieldset>
          <label for='individual_id'>Individual ID</label>
          <input id='individual_id' name='individual_id' value={indId}></input>
        </fieldset>
        
        <fieldset>
          <label for='location'>Location</label>
          <input id='location' name='location' value={location}></input>
        </fieldset>
        
        <fieldset>
          <label for='health'>Health Status</label>
          <input id='email' name='email' value={health}></input>
        </fieldset>
        
        <fieldset>
          <label for='email'>Email</label>
          <input id='email' name='email' value={email}></input>
        </fieldset>
        
        <fieldset>
          <label for='timestamp'>Record Timestamp</label>
          <input id='timestamp' name='timestamp' value={timestamp}></input>
        </fieldset>
        
        <input type='button' value='Submit'></input>
      </form>
    </div>
  );
}
export default Sighting;