import React from "react";
import Header from "../src/layoutcomponents/header";
import Footer from "../src/layoutcomponents/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactus/contactus";
import Indexpage from "../src/components/indexpage/indexpage";
import chantingAudio from "./assets/chanting.mp3";
const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div style={{ flex: 1, overflow: "auto" }}>
          {" "}
          {/* Ensures the content is scrollable */}
          <Routes>
            <Route path="/" element={<Indexpage />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
        <audio autoPlay loop>
          <source src={chantingAudio} type="audio/mpeg" />
        </audio>
      </div>
    </Router>
  );
};

export default App;
