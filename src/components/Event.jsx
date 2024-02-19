import { Button } from "react-bootstrap";
import viteLogo from "/vite.svg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Link } from "react-router-dom";
function Event(props) {
  const [event, setEvent] = useState(props.event);
  const handleBuy = () => {
    props.showAlert();
    setEvent((prev) => ({
      ...prev,
      nbParticipants: prev.nbParticipants + 1,
      nbTickets: prev.nbTickets - 1,
    }));
  };
  const handleLike = () => {
    setEvent((prev) => ({
      ...prev,
      like: !prev.like,
    }));
  };
  return (
    <Col style={{ width: "20%", margin: "10px" }} className="m-2">
      <Card>
        <Card.Img
          variant="top"
          src={`/images/${event.nbTickets ? event.img : "sold_out.png"}`}
        />

        <Card.Body>
          <Card.Title><Link to={`/events/${event.id}`}>{event.name}</Link></Card.Title>
          <Card.Text>Price : {event.price}</Card.Text>
          <Card.Text>Number of tickets : {event.nbTickets}</Card.Text>
          <Card.Text>Number of participants : {event.nbParticipants}</Card.Text>
          <Button onClick={handleLike}>
            {" "}
            {event.like ? "Dislike" : "Like"}
          </Button>
          <Button
            variant="primary"
            onClick={handleBuy}
            disabled={event.nbTickets ? false : true}
          >
            {" "}
            Book Event
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;
