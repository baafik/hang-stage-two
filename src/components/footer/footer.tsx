import React from "react";
import "./footer.css";
import callIcon from "../../assets/icons/call.png";
import messageIcon from "../../assets/icons/email.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="column">
        <h3>About Us</h3>
        <p>
          More Than Wafels is a company that specializes in Delicious, Artisan
          Belgian Waffles & Brunch treats.
        </p>
      </div>
      <div className="column">
        <h3>Customer Service</h3>
        <p>Shipping Information</p>
        <p>Terms and Conditions</p>
        <p>Instagram</p>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <div className="item-wrap">
          <img src={messageIcon} alt="email icon" />
          <p>morethanwafels@gmail.com</p>
        </div>
        <div className="item-wrap">
          <img src={callIcon} alt="call icon" />
          <p>+2348176754434</p>
        </div>
      </div>
      <div className="column">
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
