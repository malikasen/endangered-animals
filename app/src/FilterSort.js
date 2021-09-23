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
      console.log(sightings);
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
    if (filterDate !== '' || filterNickname !== '' || filterHealthStatus !== '' || filterEmail !== '') {
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
    if (filterDate !== '' || filterNickname !== '' || filterLocation !== '' || filterEmail !== '') {
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
    if (filterDate !== '' || filterNickname !== ''|| filterLocation !== '' || filterHealthStatus !== '') {
      setSightings(sightings.filter(function(sighting) {
        return (sighting.email.includes(e.target.value));
      }))
    } else {
      setSightings(permanentSightings.filter(function(sighting) {
        return (sighting.email.includes(e.target.value));
      }))
    }
  };
  function sortOn(property){
    // if(property === 'nickname'){
    //   return a.nickname - b.nickname
    // }
    return function(a, b){
      // debugger
      let textA = a[property].toString().toUpperCase();
      let textB = b[property].toString().toUpperCase();
      if (textA < textB){
        return -1;
      } else if (textA > textB){
          return 1;
      } else {
          return 0;   
      }
    }
  }
  const sortByNickname = () => {
    if (filterDate !== '' || filterNickname !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.sort(sortOn("nickname")));
      console.log("1", sightings);
    } else {
      setSightings(permanentSightings.sort(sortOn("nickname")));
      console.log("2", sightings);
    }
  }
  const sortByLocation = () => {
    if (filterDate !== '' || filterNickname !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.sort(sortOn("location")));
      console.log("1", sightings);
    } else {
      setSightings(permanentSightings.sort(sortOn("location")));
      console.log("2", sightings);
    }
  }
  const sortByHealthStatus = () => {
    if (filterDate !== '' || filterNickname !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.sort(sortOn("health_status")));
      console.log("1", sightings);
    } else {
      setSightings(permanentSightings.sort(sortOn("health_status")));
      console.log("2", sightings);
    }
  }
  const sortByEmail = () => {
    if (filterDate !== '' || filterNickname !== '' || filterLocation !== '' || filterHealthStatus !== '' || filterEmail !== '') {
      setSightings(sightings.sort(sortOn("email")));
      console.log("1", sightings);
    } else {
      setSightings(permanentSightings.sort(sortOn("email")));
      console.log("2", sightings);
    }
  }
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
                <input className='filterItem' placeholder='Date' value={filterDate} onChange={filterByDate}></input>
                <input className='filterItem' placeholder='Nickname' value={filterNickname} onChange={filterByNickname}></input>
                <input className='filterItem' placeholder='Location' value={filterLocation} onChange={filterByLocation}></input>
                <input className='filterItem' placeholder='Health Status' value={filterHealthStatus} onChange={filterByHealthStatus}></input>
                <input className='filterItem' placeholder='email' value={filterEmail} onChange={filterByEmail}></input>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col-sm-3'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='button dropdown'>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdownMenu'>
                <Dropdown.Item onClick={sortByNickname}>Nickname</Dropdown.Item>
                <Dropdown.Item onClick={sortByLocation}>Location</Dropdown.Item>
                <Dropdown.Item onClick={sortByHealthStatus}>Health status</Dropdown.Item>
                <Dropdown.Item onclick={sortByEmail}>Email</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
  )
}

export default FilterSort;