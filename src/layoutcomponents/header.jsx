import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../assets/Banner-bg.jpg"; // Adjust path
import nandiIcon from "../assets/nandhi.png"; // Ensure the path is correct
import "../css/project.css"; // Ensure  CSS is imported

const Header = () => {
  const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4d03f"];
  const textColors = ["#ffffff", "#000000", "#ffffff", "#ffffff", "#000000"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      {/* Top Header for contact details */}
      <div
        className="py-2"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="d-flex justify-content-end align-items-center">
            {/* Phone Numbers */}
            <div className="d-flex align-items-center me-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="me-2"
                style={{ color: "white" }}
              />
              <span style={{ color: "white" }}>+91-90033 93884</span>
            </div>

            {/* Email Address */}
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2"
                style={{ color: "white" }}
              />
              <span style={{ color: "white" }}>
                adiyarkkumadiyen.org@gmail.com
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className="sticky-top shadow-sm"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Col>
            <Navbar.Brand>
              <Link to="/" className="text-decoration-none">
                <img
                  src={logo}
                  alt="Logo"
                  width="50"
                  height="50"
                  className="me-2"
                  style={{ borderRadius: "50%" }}
                />
                <span style={{ color: "white" }}>ADIYARKKUM ADIYEN</span>
              </Link>
            </Navbar.Brand>
          </Col>
          {/* <Col style={{ display: "flex" }}> */}
          {/* <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="ms-auto"
            /> */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/contactus">
                  <span style={{ color: "white" }}>Contact Us</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Button
            style={{
              backgroundColor: colors[index],
              color: textColors[index],
              border: "none",
              transition: "background-color 0.5s ease-in-out",
              fontWeight: "bold",
            }}
            onClick={() =>
              (window.location.href =
                "https://pages.razorpay.com/pl_PNxbjrfJmkL9hX/view#view-1")
            }
          >
            Donate Now
          </Button>
          {/* </Col> */}
        </Container>
      </Navbar>

      {/* Scrolling Text Section */}
      <div className="repeating-text-container">
        <div className="repeating-text">
          {[...Array(20)].map((_, index) => (
            <React.Fragment key={index}>
              <span>சிவ சிவ</span>
              <img src={nandiIcon} alt="Nandi" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
