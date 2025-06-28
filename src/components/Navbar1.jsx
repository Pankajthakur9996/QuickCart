import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import "./index.css";

export const Navbar1 = () => {
  return (
    <Nav className="bg-black py-3">
      <Container>
        <Row className="w-100">
          <Col className="d-flex gap-3  align-items-center">
            <Nav.Item>
              <Link className="nav-link" to="/">QuickCart</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/cart">Cart</Link>
            </Nav.Item>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};
