import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function IndividualList() {
  const [nickname, setNickname] = useState(""); 
  const [individual, setIndividual] = useState("");
  const [individuals, setIndividuals] = useState([]);
  const [wikiPath, setWikiPath] = useState('');
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
        individual.record_timestamp = individual.record_timestamp.substring(0,10);
        setWikiPath(individual.common_name.replace(/ /g,"_"));
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
            <th>Common Species Name</th>
            <th>Record Timestamp</th>
            <th>Wikipedia Link</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              {/* id, nickname, species_id, record_timestamp */}
              <td>{individual.id}</td>
              <td>{individual.nickname}</td>
              <td>{individual.common_name}</td>
              <td>{individual.record_timestamp}</td>
              <td>
                <a target='_blank' href={"https://en.wikipedia.org/wiki/"+wikiPath}>Link</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default IndividualList;