import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect, useCallback } from "react";

function FilterSort({permanentSightings, setSightings}) {
  const [filterNickname, setFilterNickname] = useState('');
  const onChange = (e) => {
    setFilterNickname(e.target.value);
    filterByNickname(e.target.value);
  };
  const filterByNickname = (filterNicknameParam) => {
    setSightings(permanentSightings.filter(function(sighting) {
      return (sighting.nickname.includes(filterNicknameParam));
    }))
  };
  return (
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
  )
}

export default FilterSort;