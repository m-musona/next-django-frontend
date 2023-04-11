import { Navbar, Nav, Image, Stack } from "react-bootstrap";
import Link from "next/link";
import SearchBar from "./searchBar";

function MyNavbar() {
  return (
    <Navbar className="px-3" bg="white" expand="lg">
      <Image
        src="/currys-logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="m-2 d-inline-block align-top"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Stack>
          <SearchBar />
          <Nav className="mr-auto">
            <Link className="nav-link" href="#">
              Home
            </Link>
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="#">
              Contact
            </Link>
          </Nav>
        </Stack>
        <Stack>
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Stores
            </Link>
            <Link className="nav-link" href="#">
              Account
            </Link>
            <Link className="nav-link" href="#">
              Saved
            </Link>
            <Link className="nav-link" href="#">
              Basket
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Service
            </Link>
            <Link className="nav-link" href="#">
              Brands
            </Link>
            <Link className="nav-link" href="#">
              Deals
            </Link>
          </Nav>
        </Stack>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
