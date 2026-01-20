import { useState } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="topbar">
        <div className="top-item">
          <img src={locationIcon} alt="" />
          <span>Moonshine St. 14/05 Light City</span>
        </div>
        <div className="top-item">
          <img src={phoneIcon} alt="" />
          <span>00 (123) 456 78 90</span>
        </div>
        <div className="top-item">
          <img src={emailIcon} alt="" />
          <span>sandbox@email.com</span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <header className="navbar sticky">
        <img src={logo} className="logo" alt="Sandbox" />

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#">Demos</a>
          <a href="#">Pages</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Blocks</a>
          <a href="#">Documentation</a>
        </nav>

        <div className="nav-right">
          <span className="lang">EN ▾</span>
          <button className="contact-btn">Contact</button>
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </header>
    </>
  );
}
