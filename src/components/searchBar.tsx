import { Form, Button, Container } from "react-bootstrap";

function SearchBar() {
  return (
    <Container className=" justify-content-md-start">
      <Form className="d-flex rounded-pill">
        <Form.Control
          type="text"
          placeholder="Search"
          className="rounded-pill me-2"
        />
        <Button variant="outline-secondary" className="rounded-pill">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
