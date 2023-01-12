import React from "react";
import logo from "../assets/logo.png";
import mens1 from "../assets/mens1.jpg";
import m2 from "../assets/m2.jpg";
import elec1 from "../assets/elec1.jpeg";
import b1a from "../assets/b1a.jpg";
import kid1 from "../assets/kid1.jpg";
import g5 from "../assets/g5.jpg";
import toy2 from "../assets/toy2.jpg";
import "../styles/layout.css";
function NotificationPanel() {
  return (
    <nav className="navbar shadow-sm pt-5 pb-1 bg-white position-sticky top-0  mb-2">
      <a className="navbar-brand" href="#">
        <div
          style={{
            fontSize: "bolder",
            fontFamily: "sans-serif",
            marginTop: "15px",
            fontStyle: "italic",
          }}
        >
          All Items
        </div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={b1a}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />

        <div className="notifylabel"> Jewellery</div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={kid1}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel">Kids Wear</div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={g5}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel">Ladies Wear</div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={elec1}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel"> Electronics</div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={mens1}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel"> Mens Wear</div>
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={m2}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel"> Mobiles</div>
      </a>{" "}
      <a className="nav-link active" aria-current="page" href="#">
        <img
          src={toy2}
          alt=""
          width="60"
          height="60"
          className="d-inline-block align-text-top pt-3"
        />
        <div className="notifylabel"> Toys</div>
      </a>{" "}
    </nav>
  );
}
export default NotificationPanel;
