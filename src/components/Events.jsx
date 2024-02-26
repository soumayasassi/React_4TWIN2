 
import { Container, Row, Alert } from "react-bootstrap";
import Event from "./Event";
import { useEffect, useState } from "react";
import { getallEvents } from "../service/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [showalert, setShowalert] = useState(false);
  const [welcome, setWelcome] = useState(true);
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

  useEffect(() => {
   fetchdata() ; 
  }, []);

  const fetchdata = async () => 
  {
    const response = await getallEvents() 
    setEvents(response.data ) ; 
  }

  return (
    <>
    { welcome && (<Alert> Hey Welcome to Esprit Events</Alert>)}
    <Container style={{ marginTop: "30px" }}>
      <Row xs={1} md={4} className="g-4">
        {events.map((eventItem, index) => (
          <Event key={index} event={eventItem} showAlert={showAlert} />
        ))}
      </Row>
      {showalert && <Alert> You have book an event </Alert>}
    </Container>
    </>
  );
}

export default Events;
