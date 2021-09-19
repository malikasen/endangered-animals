import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";

function FilterSort({permanentSightings, setSightings, sightings}) {
  const [filterDate, setFilterDate] = useState('');
  const [filterNickname, setFilterNickname] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterHealthStatus, setFilterHealthStatus] = useState('');
  const [filterEmail, setFilterEmail] = useState('');

  const filterByDate = (e) => {
    setFilterDate(e.target.value);
    if (filterNickname !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.date_time.includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.date_time.includes(e.target.value));
      }))
    }
  };
  const filterByNickname = (e) => {
    setFilterNickname(e.target.value);
    if (filterDate !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.nickname.includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.nickname.includes(e.target.value));
      }))
    }
  };
  const filterByLocation = (e) => {
    setFilterLocation(e.target.value);
    if (filterDate !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.location.includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.location.includes(e.target.value));
      }))
    }
  };
  const filterByHealthStatus = (e) => {
    setFilterHealthStatus(e.target.value);
    if (filterDate !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.health_status.toString().includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.health_status.toString().includes(e.target.value));
      }))
    }
  };
  const filterByEmail = (e) => {
    setFilterEmail(e.target.value);
    if (filterDate !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.email.includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.email.includes(e.target.value));
      }))
    }
  };
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-3'></div>
          <div className='col-sm-3'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='button dropdown'>
                Filter By
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdownMenu'>
                <input placeholder='Date' value={filterDate} onChange={filterByDate}></input>
                <input placeholder='Nickname' value={filterNickname} onChange={filterByNickname}></input>
                <input placeholder='Location' value={filterLocation} onChange={filterByLocation}></input>
                <input placeholder='Health Status' value={filterHealthStatus} onChange={filterByHealthStatus}></input>
                <input placeholder='email' value={filterEmail} onChange={filterByEmail}></input>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col-sm-3'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='button dropdown'>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdownMenu'>
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
  )
}

export default FilterSort;