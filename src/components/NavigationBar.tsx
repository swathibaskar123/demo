import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NotificationPanel from "./NotificationPanel";
import Banner from "./Banner";
import { Input } from "reactstrap";
import {
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Badge,
} from "reactstrap";
import { Col } from "reactstrap";
import "../styles/layout.css";

function NavigationBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <span className="labelshop"> &nbsp; Online Shopping</span>
          </a>

          <form>
            <Input bsSize="lg" placeholder="Search for Products..." />
          </form>

          <div className="d-flex align-items-end">
            <UncontrolledDropdown className="me-2" direction="down">
              <DropdownToggle
                caret
                color="black"
                style={{ fontSize: "100", fontWeight: "bolder" }}
              >
                More
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Notification Perference</DropdownItem>
                <hr />
                <DropdownItem>24*7 Emergency Care</DropdownItem>
                <hr />
                <DropdownItem>Advertise</DropdownItem>
                <hr />
                <DropdownItem>Download App</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <FontAwesomeIcon size="2x" icon={faCartShopping} />

            <p
              className="me-2 mt-2"
              style={{ fontWeight: "bolder", marginBottom: "8px" }}
            >
              {" "}
              Cart
            </p>
            <button className="btn btn-success btn-lg" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
