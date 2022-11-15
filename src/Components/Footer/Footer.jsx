import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer_navTop">
          <Link to={"/"}>Back to top</Link>
        </div>

        <div className="footer_content">
          <div className="footer_links">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Abaout Amazon</Link>
              </li>
              <li>
                <Link>Investor Relations</Link>
              </li>
              <li>
                <Link>Amazon Devices</Link>
              </li>
              <li>
                <Link>Amazon Science</Link>
              </li>
            </ul>
          </div>

          <div className="footer_links">
            <h3>Make Money with Us</h3>

            <ul>
              <li>
                <Link>Sell Products on Amazon</Link>
              </li>
              <li>
                <Link>Sell on Amazon Business</Link>
              </li>
              <li>
                <Link>Sell apps on Amazon</Link>
              </li>
              <li>
                <Link>Become an Affiliates</Link>
              </li>
              <li>
                <Link>Advertise Your Producsts</Link>
              </li>
              <li>
                <Link>Self-Publish with Us</Link>
              </li>
              <li>
                <Link>Host an Amazon Hub</Link>
              </li>
              <li>
                <Link>See More Make Money with us</Link>
              </li>
              <li>
                <Link>Abaout Amazon</Link>
              </li>
              <li>
                <Link>Investor Relations</Link>
              </li>
            </ul>
          </div>

          <div className="footer_links">
            <h3>Amazon Payment Products</h3>

            <ul>
              <li>
                <Link>Amazon Business Card</Link>
              </li>
              <li>
                <Link>Shop with Points</Link>
              </li>
              <li>
                <Link>Reload Your Balance</Link>
              </li>
              <li>
                <Link>Amazon Currency Converter</Link>
              </li>
            </ul>
          </div>

          <div className="footer_links">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <Link>Amazon and COVID 19</Link>
              </li>
              <li>
                <Link>Your Account</Link>
              </li>
              <li>
                <Link>Your Orders</Link>
              </li>
              <li>
                <Link>Shipping Rates & Policies</Link>
              </li>
              <li>
                <Link>Returns & Replacements</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer_down">
          <div className="footer_logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>

          <div className="footer_language">
            <p>English</p>
          </div>

          <div className="footer_currency">
            <p>USD - U.S. Dollar</p>
          </div>

          <div className="footer_country">
            <p>Nigeria</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
