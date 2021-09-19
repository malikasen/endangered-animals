import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function IndividualList() {
  const [nickname, setNickname] = useState(""); 
  const [individual, setIndividual] = useState("");
  const [individuals, setIndividuals] = useState([]);
  const getIndividuals = () => {
    fetch("http://localhost:3000/individuals")
      .then(res => {
        return res.json()
      })
      .then((res) => setIndividuals(res));
  };
  useEffect(() => {
    getIndividuals(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    console.log('individuals', individuals);
  }, []);
  const findIndividual = (e) => {
    e.preventDefault();
    individuals.filter((individual) => {
      if(individual.nickname === nickname) {
        setIndividual(individual);
        console.log("individual", individual);
      }
    })
    setNickname('');
  }
  return (
    <div>
      <h2>Search by nickname</h2>
      <form className='form-horizontal' action="#">
        <fieldset className="form-group row">
          <label className="col-sm-2 control-label" for="nickname-search">Nickname</label>
          <div className='col-sm-10'>
            <input type="text" id="nickname-search" className="form-control" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <input type="submit" className='button' value="Search" onClick={(e) => findIndividual(e)}/>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
          <tr>
            <th>ID</th>
            <th>Nickname</th>
            <th>Species ID</th>
            <th>Record Timestamp</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              {/* id, nickname, species_id, record_timestamp */}
              <td>{individual.id}</td>
              <td>{individual.nickname}</td>
              <td>{individual.species_id}</td>
              <td>{individual.record_timestamp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default IndividualList;