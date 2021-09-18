import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import SightingsList from "./SightingsList";
import Tasks from "./Tasks";
import './App.css' 
import IndividualList from "./IndividualList";
import Hero from "./Hero";


const App = () => (
  <main className='App'>
    <nav>
      <Link to="/">Home</Link> | <Link to="individual">Individual</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/individual" element={<Individual />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    {/* <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2> */}
    {/* <Tasks /> */}
    <Hero />
    <h2>Endangered Animals</h2>
    <SightingsList />
  </>
);

const Individual = () => (
  <>
    
    <IndividualList />
  </>
);

export default App;
