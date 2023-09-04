import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {useNavigate} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/divs.css'
function Header()
{

  var navigate= useNavigate();


  var session=()=>{

    sessionStorage.clear();

    navigate("/")
  }
    return(
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/company">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/company/addjob">Addjob</Nav.Link>
            <Nav.Link href="/company/setquestions">Set Questions</Nav.Link>
            <Nav.Link href="/company/candidate_list">Candidate List</Nav.Link>
          </Nav>
          <button className='btn btn-outline-success'>Edit</button><div className='space'></div>
          <button className='btn btn-outline-danger' onClick={session}>Logout</button>
        </Container>
      </Navbar>
    </>

    );
}
export default Header;