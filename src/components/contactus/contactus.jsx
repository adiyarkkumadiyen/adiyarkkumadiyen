import React from "react";
import { Container, Row } from "react-bootstrap";

const Aboutus = () => {
  return (
    <Container className="p-4">
      <Row className="bg-light text-danger p-4 rounded">
        <div className="d-flex justify-content-center">
          <h5>Contact Details</h5>
        </div>
        <br />
        <Row className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <span className="fw-bold me-2">Trust Name:</span>
            <span>ADIYARKKUM ADIYEN</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="fw-bold me-2">Email:</span>
            <span>adiyarkkumadiyen.org@gmail.com</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="fw-bold me-2">Phone No:</span>
            <span>+91-90033 93884</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="fw-bold me-2">Address:</span>
            <span>
              11/11A, Sirumugai Road, North Street, Annur, Annur Taluk,
              Coimbatore District, Tamilnadu, India- 641653.
            </span>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Aboutus;
