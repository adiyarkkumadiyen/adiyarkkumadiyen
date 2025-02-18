import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer from "../assets/footer.jpg";
const Footer = () => {
  return (
    <footer
      className="bg-dark text-white"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container fluid className="py-4">
        <Row className="d-flex justify-content-space-between">
          {/* Column 1: About Us */}
          <Col>
            <h5>About Us</h5>
            <p>
              Adiyarkkum Adiyen is dedicated to serving humanity through various
              causes. Join us in making a difference!
            </p>
          </Col>
          {/* Column 2: Links */}
          {/* <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about-us" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/donate" className="text-white text-decoration-none">
                  Donate
                </a>
              </li>
              <li>
                <a href="/causes" className="text-white text-decoration-none">
                  Causes
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col> */}
          {/* Column 3: Contact Info */}
          <Col>
            <h5>Contact Us</h5>
            <p>
              11/11A, Sirumugai Road, North Street, Annur, Annur Taluk,
              Coimbatore District, Tamilnadu, India- 641653. <br />
              Email:{" "}
              <a href="mailto:info@adiyarkkumadiyen.org" className="text-white">
                adiyarkkumadiyen.trust@gmail.com
              </a>
              <br />
              Cell : +91-90033 93884, +91-98422 91795{" "}
            </p>
          </Col>
        </Row>
        <Row className="border-top pt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Adiyarkkum Adiyen. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
