import React from "react";
import Facebook from "../images/facebook.png";

function Footer({ children }) {
  return (
    <footer className="Site-footer">
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-xs-center">
          &copy;{new Date().getFullYear()} AOFGS - All Rights Reserved | Contact
          us at <a href="mailto:AOFGS@gmail.com">AOFGS@gmail.com</a>
        </p>
        <div className="nav justify-content-center">
          <a
            style={{ display: "table-cell" }}
            href="https://www.facebook.com/groups/589726665203977/"
            target="_blank"
          >
            <img src={Facebook} className="icons" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
