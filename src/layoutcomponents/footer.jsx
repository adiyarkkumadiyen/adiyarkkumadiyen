import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer from "../assets/footer.jpg";
import QR from "../assets/QR.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../css/project.css"; // Ensure  CSS is imported

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
        <Row className="d-flex justify-content-between">
          {/* Column 1: About Us */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Adiyarkkum Adiyen is dedicated to serving humanity through various
              causes. Join us in making a difference!
            </p>

            {/* Donation Details (Without Colors) */}
            <div className="p-2">
              <p>நன்கொடை வழங்கும் பக்தர்களுக்கு வேண்டுகோள்.</p>
              <p>
                <strong>Name:</strong> ADIYARKKUM ADIYEN <br />
                <strong>BANK:</strong> UNION BANK OF INDIA <br />
                <strong>BRANCH:</strong> SOMANUR <br />
                <strong>ACCOUNT:</strong> CA A/C NO. 334901010300478 <br />
                <strong>IFSC CODE:</strong> UBIN0533491
              </p>
              <p>
                மேலே காணும் <strong>வங்கிக்கு</strong> அனுப்பவும்.
              </p>
            </div>
          </Col>

          {/* Column 2: QR Code */}
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={QR}
              alt="QR Code"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "50%", height: "auto" }}
            />
          </Col>

          {/* Column 3: Contact Info */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              11/11A, Sirumugai Road, North Street, Annur, Annur Taluk,
              Coimbatore District, Tamilnadu, India- 641653. <br />
              Email:{" "}
              <a href="mailto:info@adiyarkkumadiyen.org" className="text-lght">
                adiyarkkumadiyen.org@gmail.com
              </a>
              <br />
              Cell: +91-90033 93884
            </p>
            {/* Social Media Icons */}
            <div className="d-flex align-items-center gap-3 ">
              <h6 className="fw-bold text-white mb-0">Social Media:</h6>

              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/people/Adiyarku-Adiyen/100053974383705/?_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-container facebook"
                >
                  <FaFacebookF className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/adiyarku_adiyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-container instagram"
                >
                  <FaInstagram className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/@AdiyarkkumAdiyenTrust?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-container youtube"
                >
                  <FaYoutube className="icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        {/* Footer Section */}
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
