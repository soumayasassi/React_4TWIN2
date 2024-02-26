import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/events">My Events</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            to="/events"
            as={NavLink}
            style={({ isActive }) => ({
              textDecoration: isActive && "underline",
            })}
          >
            Events
          </Nav.Link>
           
          <Nav.Link
            as={NavLink}
            to="/events/add"
            style={({ isActive }) => ({
              textDecoration: isActive && "underline",
            })}
          >
            Add New Event
          </Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
