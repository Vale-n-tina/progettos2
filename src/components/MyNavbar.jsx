import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const MyNavbar = (props) => {
   
    const [searchInput, setSearchInput] = useState("");

    const handleSearchClick = () => {
        props.setSearchProp(searchInput);
      };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">METEO.IT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/" className="nav-link">
          <div >Home</div>
          </Link>
            <Form className="d-flex">
              <Form.Control
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
                type="search"
                placeholder="Search your city"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
