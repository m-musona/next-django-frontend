import { Breadcrumb } from "react-bootstrap";

function BreadCrumb() {
  return (
    <>
      <hr className="divider" />
      <Breadcrumb className="my-breadcrumb bg-white">
        <Breadcrumb.Item href="#" active>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Computing
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Laptops
        </Breadcrumb.Item>
        <Breadcrumb.Item active>All Laptops</Breadcrumb.Item>
      </Breadcrumb>
      <hr className="divider" />
    </>
  );
}

export default BreadCrumb;
