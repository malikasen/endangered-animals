import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function Sighting({sighting}) {
  return (
    <div className='row'>
      <div className='col'>{sighting.date_time.substring(0,10)}</div>
      <div className='col'>{sighting.nickname}</div>
      <div className='col'>{sighting.location}</div>
      <div className='col'>{sighting.health_status.toString()}</div>
      <div className='col'>{sighting.email}</div>
      <div className='col'>{sighting.record_timestamp.substring(0,10)}</div>
    </div>
  )
}

function SightingsList() {
  const [date, setDate] = useState('');
  const [indId, setIndId] = useState('');
  const [location, setLocation] = useState('');
  const [health, setHealth] = useState('');
  const [email, setEmail] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [sightings, setSightings] = useState([]);
  const getSightings = () => {
    fetch("http://localhost:3000/sightings")
      .then(res => {
        return res.json()
      })
      .then((res) => setSightings(res));
  };
  const postSighting = (newUser) => {
    fetch("http://localhost:3000/sightings", {
      method:"POST", 
      body: JSON.stringify(newUser), 
      headers: {"content-type": "application/json"}
    })
      .then(res => {
        return res.json()
      })
      .then(async () => {
        return await fetch("http://localhost:3000/sightings", {
          method:"GET"
        })
      })
      .then(res => {
        return res.json()
      })
      .then((res) => {
        // const newSightings = [...sightings, res];
        setSightings(res);
        // setSightings(newSightings);
      })
  };
  useEffect(() => {
    getSightings(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    console.log('sightings', sightings);
  }, []);
  const collectData = (e) => {
    e.preventDefault();
    const newSighting = {date: date, indId: indId, location: location, health: health, email: email, timestamp: timestamp}
    postSighting(newSighting);

    setDate('');
    setIndId('');
    setLocation('');
    setHealth('');
    setEmail('');
    setTimestamp('');
  }
  return (
    <div>
      <div className='container'>
          <div className='row'>
            <div className='col'>Date</div>
            <div className='col'>Nickname</div>
            <div className='col'>Location</div>
            <div className='col'>Health status</div>
            <div className='col'>Email</div>
            <div className='col'>Record time</div>
          </div>
        {sightings.map((sighting) => {
          return (
            <div>
              <Sighting key={sighting.id} sighting={sighting}/>
            </div>
          )
        })}
      </div>
      <h3>Please use the form to record the endangered animal sighting</h3>
      <form onSubmit={collectData}>
        <fieldset>
          <label for='date'>Date</label>
          <input id='date' name='date' type='date' value={date} onChange={(e) => setDate(e.target.value)} required></input>
        </fieldset>
    
        <fieldset>
          <label for='individual_id'>Individual ID</label>
          <input id='individual_id' name='individual_id' type='number' min='1' step='1' value={indId} onChange={(e) => setIndId(e.target.value)} required></input>
        </fieldset>
        
        <fieldset>
          <label for='location'>Location</label>
          <input id='location' name='location' type='text' value={location} onChange={(e) => setLocation(e.target.value)} required></input>
        </fieldset>
        
        <fieldset>
          <label for='health'>Health Status</label>
          <input id='email' name='email' type='text' value={health} onChange={(e) => setHealth(e.target.value)} required></input>
        </fieldset>
        
        <fieldset>
          <label for='email'>Email</label>
          <input id='email' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        </fieldset>
        
        <fieldset>
          <label for='timestamp'>Record Timestamp</label>
          <input id='timestamp' name='timestamp' type='date' value={timestamp} onChange={(e) => setTimestamp(e.target.value)} required></input>
        </fieldset>
        
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}
export default SightingsList;

//https://www.britannica.com/list/10-of-the-most-famous-endangered-species