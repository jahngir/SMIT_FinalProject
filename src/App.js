import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div ClassName="new">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SMIT</Navbar.Brand>
          <Nav >
            
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/course">Courses</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            <div className="d-grid gap-2">
              <Button href="/feeds" variant="primary" size="lg">
                Show Posts
                </Button></div>
  

      <Outlet />
      
</div>
    
    )
};

export default Home;

//nav

