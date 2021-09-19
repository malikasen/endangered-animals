import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import SightingsList from "./SightingsList";
import './App.css' 
import IndividualList from "./IndividualList";
import Hero from "./Hero";
import { Navbar, Container, Nav } from "react-bootstrap";


const App = () => (
  <main className='App'>
    <Navbar className='navbar' collapseOnSelect expand='md' bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Endangered Animals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Sightings</Nav.Link>
          <Nav.Link href="individual">Search for Individuals</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <nav>
      <Link to="/">Home</Link> | <Link to="individual">Individual</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/individual" element={<Individual />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    <Hero /> 
    <SightingsList /> 
  </>
);

const Individual = () => (
  <>
    <IndividualList />
  </>
);

export default App;
