import events from "../events.json";
import { Container, Row , Alert } from "react-bootstrap";
import Event from "./Event";
import { useState } from "react";

function Events() {
 

  return (
    <Container style={{ marginTop: "30px" }}>
      
      <Row xs={1} md={4} className="g-4">
        {events.map((eventItem, index) => (
          <Event key={index} event={eventItem}  />
        ))}
      </Row>
    </Container>
  );
}

export default Events;
