import React from "react";
import "./navbar.css";
import "../../pages/Home/landingPage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-title">
          <img
            className="navbar-logo"
            src="assets/images/homepage/brand-logo.png"
            alt="brand-name"
          />
          <h3 className="store-name">RoboStore</h3>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a className="link-undecorated" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className="link-undecorated" href="./product-page.html">
                Shop{" "}
              </a>
            </li>
            <li>
              <a className="link-undecorated" href="./login.html">
                Login
              </a>
            </li>
          </ul>
          <a href="./wishlist.html">
            <FavoriteBorderIcon style={{ margin: "1rem", fontSize: "2rem" }} />
          </a>
          <a href="./cart-management.html">
            <ShoppingCartIcon style={{ margin: "1rem", fontSize: "2rem" }} />
          </a>
          <a href="./logout.html">
            <LogoutIcon style={{ margin: "1rem", fontSize: "2rem" }} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
