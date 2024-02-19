import { useParams } from "react-router-dom";

function About() {
    const {username} = useParams() ; 
  return <>
  About Page
  <h2>welcome  {username}</h2> 
  </>;
}

export default About;
