import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/divs.css'
import { useNavigate } from 'react-router-dom';

function Header()
{

  var navigate= useNavigate();

  var handler=()=>{

    sessionStorage.clear();

    navigate("/")
  }

    return(
    <>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="/candidate">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/candidate/appliedjob">Appliedjob</Nav.Link>
            <Nav.Link href="/candidate/exam">Exam</Nav.Link>
            <Nav.Link href="/candidate/companylist">CompanyList</Nav.Link>
          </Nav>
          <button className='btn btn-outline-success'>Edit</button><div className='space'></div>
          <button className='btn btn-outline-danger' onClick={handler}>Logout</button>
        </Container>
      </Navbar>
    </>

    );
}
export default Header;