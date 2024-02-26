import events from "../events.json";
import { Container, Row, Alert } from "react-bootstrap";
import Event from "./Event";
import { useEffect, useState } from "react";
import {getallEvents, deleteEvent } from "../service/api";
function Events() {
 
  const [showalert, setShowalert] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getallEvents();

    setEvents(response.data);
  };

  const deleteE = async (id) => {

    await deleteEvent(id);
    fetchData();
  }
  const showAlert = () => {
    setShowalert(true);
    setTimeout(() => {
      setShowalert(false);
    }, 5000);
  };

  useEffect(() => {
    setTimeout(() => {
      setWelcome(false)
    }, 3000);
  }, []);
  return (
    <>
    { welcome && (<Alert> Hey Welcome to Esprit Events</Alert>)}
    <Container style={{ marginTop: "30px" }}>
      <Row xs={1} md={4} className="g-4">
        {events.map((eventItem, index) => (
          <Event key={index} event={eventItem} showAlert={showAlert} deleteEvent={deleteE}/>
        ))}
      </Row>
      {showalert && <Alert> You have book an event </Alert>}
    </Container>
    </>
  );
}

export default Events;
