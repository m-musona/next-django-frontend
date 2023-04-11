import { Row, Stack, Col } from "react-bootstrap";
import Link from "next/link";

function TopNav() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Link className="ms-auto text-secondary" href="#">
        Help & Support
      </Link>
      <Link className="text-secondary" href="#">
        Track my order & repair
      </Link>
      <Link className="text-secondary" href="#">
        Returns
      </Link>
      <Link className="text-secondary" href="#">
        Spread the cost
      </Link>
      <Link className="text-secondary" href="#">
        Gift cards
      </Link>
      <Link className="text-secondary" href="#">
        TechTalk
      </Link>
      <Link className="text-secondary me-2" href="#">
        Business
      </Link>
    </Stack>
  );
}

export default TopNav;
