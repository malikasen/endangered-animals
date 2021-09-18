import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect, useCallback } from "react";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
console.log(window.React1, window.React2);
// function Sighting({sighting}) {
//   return (
//     <tr className='row'>
//       <td className='col'>{sighting.date_time.substring(0,10)}</td>
//       <td className='col'>{sighting.nickname}</td>
//       <td className='col'>{sighting.location}</td>
//       <td className='col'>{sighting.health_status.toString()}</td>
//       <td className='col'>{sighting.email}</td>
//       <td className='col'>{sighting.record_timestamp.substring(0,10)}</td>
//     </tr>
//   )
// }

function SightingsList() {
  const [date, setDate] = useState('');
  const [indId, setIndId] = useState('');
  const [location, setLocation] = useState('');
  const [health, setHealth] = useState('');
  const [email, setEmail] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [sightings, setSightings] = useState([]);
  const [permanentSightings, setPermanentSightings] = useState([]);
  const [filterNickname, setFilterNickname] = useState('');
  const getSightings = () => {
    fetch("http://localhost:3000/sightings")
      .then(res => {
        return res.json()
      })
      .then((res) => {
        console.log("response", res)
        setSightings(res);
        setPermanentSightings(res);
      });

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
  };
  const filter = (filterNicknameParam) => {
    // e.preventDefault();
    setSightings(permanentSightings.filter(function(sighting) {
      console.log("sigting - nickName",sighting.nickName);
      console.log("filter-nickname-prarm", filterNicknameParam);
      return (sighting.nickname.includes(filterNicknameParam));
    }))
    console.log("sightings", sightings);
    console.log("filter Nickname Param", filterNicknameParam);
    console.log("filter Nickname", filterNickname);
  };
  const onChange = (e) => {
    setFilterNickname(e.target.value);
    filter(e.target.value);
    console.log("console", e.target.value);
  };
  return (
    <div>
      <h3>Sighting Log</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-3'></div>
          <div className='col-sm-3'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='button'>
                Filter By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
                <input placeholder='Nickname' value={filterNickname} onChange= {onChange}></input>
                <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Health status</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Record date</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col-sm-3'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='button'>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Nickname</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Health status</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Record date</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover'>
            <thead>
            <tr>
              <th>Date</th>
              <th>Nickname</th>
              <th>Location</th>
              <th>Health status</th>
              <th>Email</th>
              <th>Record date</th>
            </tr>
            </thead>
            <tbody>
              {
                sightings.map((sighting) => (
                // return (
                //   // <div>
                //     <Sighting key={sighting.id} sighting={sighting}/>
                //   // </div>
                // )
                  <tr key={sighting.id}>
                    <td>{sighting.date_time.substring(0,10)}</td>
                    <td>{sighting.nickname}</td>
                    <td>{sighting.location}</td>
                    <td>{sighting.health_status.toString()}</td>
                    <td>{sighting.email}</td>
                    <td>{sighting.record_timestamp.substring(0,10)}</td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>
      <h3>Please use the form to record the endangered animal sighting</h3>
      <form className="form-horizontal" onSubmit={collectData}>
        <fieldset className="form-group row">
          <label for='date' className="col-sm-2 control-label">Date</label>
          <div class="col-sm-10">
            <input id='date' name='date' type='date' className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required></input>
          </div>
        </fieldset>
    
        <fieldset className="form-group row">
          <label for='individual_id' className="col-sm-2 control-label">Individual ID</label>
          <div class="col-sm-10">
            <input id='individual_id' name='individual_id' type='number' className="form-control" min='1' step='1' value={indId} onChange={(e) => setIndId(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='location' className="col-sm-2 control-label">Location</label>
          <div class="col-sm-10">
            <input id='location' name='location' type='text' className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='health' className="col-sm-2 control-label">Health Status</label>
          <div class="col-sm-10">
            <input id='email' name='email' type='text' className="form-control" value={health} onChange={(e) => setHealth(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='email' className="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input id='email' name='email' type='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='timestamp' className="col-sm-2 control-label">Record Timestamp</label>
          <div class="col-sm-10">
            <input id='timestamp' name='timestamp' type='date' className="form-control" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} required></input>
          </div>
        </fieldset>

        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4" >
            <input type='submit' className='button' value='Submit'></input>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
 
    </div>
  );
}
export default SightingsList;

//https://www.britannica.com/list/10-of-the-most-famous-endangered-species