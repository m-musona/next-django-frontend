import Link from "next/link";
import { Card, Form, Nav, Button, NavDropdown } from "react-bootstrap";

function SideBar() {
  return (
    <div className="sidebar bg-white rounded p-2 mx-2">
      <Nav className="flex-column">
        <h5 className="p-2">Filters</h5>
        <hr className="divider" />
        <h6 className="p-1">Check Stock in your area</h6>
        <Form className="flex-column rounded-pill">
          <Form.Control
            type="text"
            placeholder="Search"
            className="rounded me-2"
          />
          <Button variant="outline-secondary" className="rounded mt-2">
            Search
          </Button>
        </Form>
        <hr className="divider mt-2" />
        <Nav.Item>
          <NavDropdown title="By Price">
            <NavDropdown.Item href="#">$100 to $499(127)</NavDropdown.Item>
            <NavDropdown.Item href="#">$500 to $199(144)</NavDropdown.Item>
            <NavDropdown.Item href="#">$1000 and over(100)</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <hr />
        <Nav.Item>
          <NavDropdown title="By Brand">
            <NavDropdown.Item href="#">ACER(54)</NavDropdown.Item>
            <NavDropdown.Item href="#">APPLE(28)</NavDropdown.Item>
            <NavDropdown.Item href="#">ASUS(59)</NavDropdown.Item>
            <NavDropdown.Item href="#">DELL(3)</NavDropdown.Item>
            <NavDropdown.Item href="#">LG(10)</NavDropdown.Item>
            <NavDropdown.Item href="#">LENOVO(61)</NavDropdown.Item>
            <NavDropdown.Item href="#">MICROSOFT(46)</NavDropdown.Item>
            <NavDropdown.Item href="#">SAMSUNG(16)</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <hr />
        <Nav.Item>
          <NavDropdown title="Customer Rating">
            <NavDropdown.Item href="#">5 or more(14)</NavDropdown.Item>
            <NavDropdown.Item href="#">4 or more(274)</NavDropdown.Item>
            <NavDropdown.Item href="#">3 or more(310)</NavDropdown.Item>
            <NavDropdown.Item href="#">2 or more(312)</NavDropdown.Item>
            <NavDropdown.Item href="#">1 or more(312)</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <hr />
        <Nav.Item>
          <NavDropdown title="Type">
            <NavDropdown.Item href="#">Windows Laptops(14)</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Touch Screen Laptops(274)
            </NavDropdown.Item>
            <NavDropdown.Item href="#">2 in 1 Laptops(310)</NavDropdown.Item>
            <NavDropdown.Item href="#">Surface(312)</NavDropdown.Item>
            <NavDropdown.Item href="#">Macbook(312)</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;
