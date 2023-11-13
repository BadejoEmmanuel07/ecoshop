import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import {Cart} from "../images/index"
import {Eco} from "../images/index"
import {BsSearch } from 'react-icons/bs';



function Navlinks() {
  return (
   <div>
    <div className='white'>
     <Navbar collapseOnSelect expand="md" className="bg-white custom-box">
      <Container>
        <Navbar.Brand href="/"> <img src={Eco} alt="" style={{width: "50px"}} /></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/cart"> <img src={Cart} alt="" style={{width: "20px"}}/> </Nav.Link>
            <Nav.Link href="/search"><BsSearch/> </Nav.Link>

         
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
    <Outlet/>
   </div>
  );
}

export default Navlinks;