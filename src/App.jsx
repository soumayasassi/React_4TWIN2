import logo from "./logo.svg";
import "./App.css";

function App() {
  var nom = <h2> Foulen </h2>;

  var prenom = <h2> Ben Foulen </h2>;
  const photo = (
    <img src="logo192.png" alt="maPhoto" width="100px" height="100px" />
  );
  const expression = <p> 1 + 1 = {1 + 1} </p>;
  const mystyle = {
    color: "red",
    fontSize: "25px",
  };
  const students = [
    { name: "John", marks: 98 },
    { name: "Baba", marks: 23, id: 1 },
    { name: "John", marks: 45, id: 2 },
    { name: "Wick", marks: 75, id: 3 },
  ];
  return (
    <div className="myclass">
      {nom}
      {prenom}
      {photo}
      {expression}
      {/*This is a comment*/}
      <p style={mystyle}> Hello</p>

      {students.map((s) => {
        return <li key={s.id}> {s.name} </li>;
      })}
    </div>
  );
}

export default App;
