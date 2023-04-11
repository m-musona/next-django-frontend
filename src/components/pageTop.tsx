import { Container, Stack, Image } from "react-bootstrap";

function PageTop() {
  return (
    <>
      <Container className="banner-container">
        <Stack>
          <h4>All Laptops</h4>
          <Image src="/banner.jpg" alt="Top Banner" />
        </Stack>
      </Container>
    </>
  );
}

export default PageTop;
