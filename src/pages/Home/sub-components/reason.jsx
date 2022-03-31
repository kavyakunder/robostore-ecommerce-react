import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PaymentIcon from "@mui/icons-material/Payment";
import "../landingPage.css";

function Reason() {
  return (
    <div>
      <hr className="horizontal-line" />

      <h1 className="heading">Why Robostore?</h1>
      <div className="why-robostore">
        <div className="reason-container">
          <LocalShippingIcon
            sx={{ fontSize: 70, color: "orange" }}
            style={{ color: "red" }}
          />
          <div className="reason-content">
            <p className="reason-heading">Free Delivery</p>
            <p className="reason-text">For all orders over $2000</p>
          </div>
        </div>
        <div className="reason-container">
          <WhatsAppIcon className="starBorderOutlined" sx={{ fontSize: 70 }} />
          <div className="reason-content">
            <p className="reason-heading">Fast Support</p>
            <p className="reason-text">Fast Support by Whatsapp</p>
          </div>
        </div>
        <div className="reason-container">
          <PaymentIcon sx={{ fontSize: 70 }} />
          <div className="reason-content">
            <p className="reason-heading">Safe Payment</p>
            <p className="reason-text">100% secure payment</p>
          </div>
        </div>
        <div className="reason-container">
          <HandshakeIcon sx={{ fontSize: 70 }} />

          <div className="reason-content">
            <p className="reason-heading">Shop With Confidence</p>
            <p className="reason-text">We have easy return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
