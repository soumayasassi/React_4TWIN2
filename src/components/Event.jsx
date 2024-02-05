import { Button } from "react-bootstrap";
import viteLogo from "/vite.svg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
function Event(props) {
    
  return (
    <Col style={{ width: "20%" , margin : "10px" }} className="m-2">
      <Card>
        <Card.Img variant="top" src={"../images/" + props.event.img} />
        <Card.Body>
          <Card.Title>{props.event.name}</Card.Title>
          <Card.Text>Price : {props.event.price}</Card.Text>
          <Card.Text>Number of tickets : {props.event.nbTickets}</Card.Text>
          <Card.Text>
            Number of participants : {props.event.nbParticipants}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;
