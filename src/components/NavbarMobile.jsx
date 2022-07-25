import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosArrowDown, IoLogoTwitter } from "react-icons/io";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineSupportAgent, MdPhoneEnabled } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { BsCoin, BsTelephone } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { TbFileCertificate } from "react-icons/tb";
import Logo from "../assets/ClemensMainLogo.png";
import CSR from "../assets/CSR20.png";
import "./NavbarMobile.css";

function NavbarMobile(props) {
  const [dropdown, setDropdown] = useState(0);
  const [preload, setPreload] = useState("preload");
 

  


  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload("");
    }, 600);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <header className="navbar-mobile" id={preload}>
        <div className="navbar-container container">
          <div className="navbar-wrapper">
            <Link to="/" onClick={props.click ? props.handleClicks : null} className="logo-container">
              <img className="navbar-logo" src={Logo} alt="clemensLogo" />
            </Link>
            <div className="icon-wrapper">
              <div className="box">
                <div className={props.isActive ? "active btn-icon" : "not-active btn-icon"} onClick={props.handleClicks}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <ul className={props.click ? "nav-menu-active" : "nav-menu"}>
                <li
                  className={
                    props.click
                      ? "nav-sections nav-sections-1 nav-sections-active"
                      : "nav-sections nav-sections-1"
                  }
                >
                  <ul className="nav-section-containers">
                    <li>
                      <Link to="/" onClick={props.handleClicks} className="nav-links nav-sections-1-a">
                        HOME
                      </Link>
                    </li>
                    <li
                      className="internal-dropdown"
                      onClick={() =>
                        dropdown === 1 ? setDropdown(0) : setDropdown(1)
                      }
                    >
                      <div className="internal-dropdown-top-wrapper">
                        <div>ABOUT</div>
                        <div className={dropdown === 1 ? "arrow-up" : "arrow-down"}>
                          <IoIosArrowDown />
                        </div>
                      </div>
                      <ul
                        className={
                          dropdown === 1 ? "internal-menu-active" : "internal-menu"
                        }
                      >
                        <li>
                          <Link to="/about" onClick={props.handleClicks} className="nav-links">
                            About Clemens
                          </Link>
                        </li>
                        <li>
                          <Link to="/meet-our-staff" onClick={props.handleClicks} className="nav-links">
                            Meet Our Staff
                          </Link>
                        </li>
                        <li>
                          <Link to="/in-the-community" onClick={props.handleClicks} className="nav-links">
                            In the Community
                          </Link>
                        </li>
                        <li>
                          <Link to="/testimonials" onClick={props.handleClicks} className="nav-links">
                            Testimonials
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="internal-dropdown"
                      onClick={() =>
                        dropdown === 2 ? setDropdown(0) : setDropdown(2)
                      }
                    >
                      <div className="internal-dropdown-top-wrapper">
                        <div>PRODUCTS &#38; SERVICES</div>
                        <div className={dropdown === 2 ? "arrow-up" : "arrow-down"}>
                          <IoIosArrowDown />
                        </div>
                      </div>
                      <ul
                        className={
                          dropdown === 2 ? "internal-menu-active" : "internal-menu"
                        }
                      >
                        <li>
                          <Link to="/tranportation-retail" onClick={props.handleClicks} className="nav-links">
                            Transportation Retail
                          </Link>
                        </li>
                        <li>
                          <Link to="/brokerage" onClick={props.handleClicks} className="nav-links">
                            Brokerage
                          </Link>
                        </li>
                        <li>
                          <Link to="/benefits" onClick={props.handleClicks} className="nav-links">
                            Corporate/Individual Benefits
                          </Link>
                        </li>
                        <li>
                          <Link to="/insurance" onClick={props.handleClicks} className="nav-links">
                            Business/Personal Insurance
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="internal-dropdown"
                      onClick={() =>
                        dropdown === 3 ? setDropdown(0) : setDropdown(3)
                      }
                    >
                      <div className="internal-dropdown-top-wrapper">
                        <div>CLAIMS</div>
                        <div className={dropdown === 3 ? "arrow-up" : "arrow-down"}>
                          <IoIosArrowDown />
                        </div>
                      </div>
                      <ul
                        className={
                          dropdown === 3 ? "internal-menu-active" : "internal-menu"
                        }
                      >
                        <li>
                          <Link to="/things-to-consider" onClick={props.handleClicks} className="nav-links">
                            Things to Consider
                          </Link>
                        </li>
                        <li>
                          <Link to="/report-a-claim" onClick={props.handleClicks} className="nav-links">
                            Report A Claim
                          </Link>
                        </li>
                        <li>
                          <Link to="/company-claim-numbers" onClick={props.handleClicks} className="nav-links">
                            Company Claim Numbers
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/helpful-links"
                        className="nav-links nav-sections-1-a"
                        onClick={props.handleClicks}
                      >
                        HELPFUL LINKS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/insurance-companies"
                        className="nav-links nav-sections-1-a"
                        onClick={props.handleClicks}
                      >
                        INSURANCE COMPANIES
                      </Link>
                    </li>
                    <li>
                      <Link to="/locations" onClick={props.handleClicks} className="nav-links nav-sections-1-a">
                        LOCATIONS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    props.click
                      ? "nav-sections nav-sections-2 nav-sections-active"
                      : "nav-sections nav-sections-2"
                  }
                >
                  <ul className="nav-section-containers">
                    <li>
                      <Link onClick={props.handleClicks} className="nav-sections-2-a" to="/get-a-quote">
                        {<AiOutlinePrinter className="navbar-icons" />} GET A QUOTE
                      </Link>
                    </li>
                    <li>
                      <Link onClick={props.handleClicks} className="nav-sections-2-a" to="/access-csr24">
                        {<MdOutlineSupportAgent className="navbar-icons" />} ACCESS
                        CSR24
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={props.handleClicks}
                        className="nav-sections-2-a"
                        to="/request-insurance-certificate"
                      >
                        {<TbFileCertificate className="navbar-icons" />} REQUEST
                        INSURANCE CERTIFICATE
                      </Link>
                    </li>
                    <li>
                      <Link onClick={props.handleClicks} className="nav-sections-2-a" to="/report-a-claim">
                        {<FaRegClipboard className="navbar-icons" />} REPORT A CLAIM
                      </Link>
                    </li>
                    <li>
                      <Link onClick={props.handleClicks} className="nav-sections-2-a" to="/make-a-payment">
                        {<BsCoin className="navbar-icons" />} MAKE A PAYMENT
                      </Link>
                    </li>
                    <li>
                      <Link onClick={props.handleClicks} className="nav-sections-2-a" to="/contact-us">
                        {<BsTelephone className="navbar-icons" />} CONTACT US
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    props.click
                      ? "nav-sections nav-sections-3 nav-sections-active"
                      : "nav-sections nav-sections-3"
                  }
                >
                  <ul className="nav-section-containers">
                    <li className="customer-access-wrapper">
                      <a
                        className="csr-20"
                        href="https://portal.csr24.com/mvc/6622100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={CSR} alt="CSR20" />
                      </a>
                      <a
                        className="csr-24-text"
                        href="https://portal.csr24.com/mvc/6622100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CUSTOMER ACCESS
                      </a>
                    </li>
                    <li className="nav-callus">
                      {<MdPhoneEnabled className="callus-icon" />}
                      <a href="tel:123-456-7890">
                        <span className="giveus-call"> GIVE US A CALL </span> 309
                        662 2100
                      </a>
                    </li>
                    <li className="social-media-container">
                      <a
                        className="social-media-icons"
                        href="https://www.facebook.com/ClemensInsurance"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {<CgFacebook />}
                      </a>
                      <a
                        className="social-media-icons"
                        href="https://twitter.com/clemensins"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {<IoLogoTwitter />}
                      </a>
                      <a
                        className="social-media-icons"
                        href="https://www.linkedin.com/company/clemens-insurance/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {<GrLinkedinOption />}
                      </a>
                    </li>
                  </ul>
                </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavbarMobile;
