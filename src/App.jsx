import React from "react";
import Header from "../src/layoutcomponents/header";
import Footer from "../src/layoutcomponents/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactus/contactus";
import Indexpage from "../src/components/indexpage/indexpage";

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
      </div>
    </Router>
  );
};

export default App;
