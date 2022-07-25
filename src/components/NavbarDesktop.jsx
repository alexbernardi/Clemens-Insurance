import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosArrowDown, IoLogoTwitter } from "react-icons/io";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineSupportAgent, MdPhoneEnabled, MdDoubleArrow,} from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { BsCoin, BsTelephone } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { TbFileCertificate } from "react-icons/tb";
import Logo from "../assets/ClemensMainLogo.png";
import CSR from "../assets/CSR20.png";
import "./NavbarDesktop.css";

function NavbarDesktop() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [preload, setPreload] = useState("preload");
  console.log(click);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload("");
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  console.log(preload);

  return (
    <>
      <header className="navbar-desktop-container" id={preload}>
        <section className="navbar-sections navbar-section-1">
          <ul className="nav-section-1-container">
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
            <li className="nav-section-1-right">
              <div className="customer-access-wrapper">
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
              </div>
              <div className="nav-callus">
                {<MdPhoneEnabled className="callus-icon" />}
                <a className="call-internal" href="tel:123-456-7890">
                  <span className="giveus-call callus"> GIVE US A CALL </span>{" "}
                  309 662 2100
                </a>
              </div>
              <div className="get-a-quote">
                <Link className="get-a-quote-internal" to="/get-a-quote">
                  GET A QUOTE
                </Link>
              </div>
            </li>
          </ul>
        </section>
        <section className="navbar-sections navbar-section-2">
          <div className="navbar-section-2-logo">
            <Link to="/" className="desktop-logo-container">
              <img
                className="navbar-desktop-logo"
                src={Logo}
                alt="clemensLogo"
              />
            </Link>
          </div>
          <ul className="navbar-section-2-rightside">
            <li>
              <Link to="/" className="nav-links home-link nav-sections-1-a">
                HOME
              </Link>
            </li>
            <li className="internal-dropdown">
              <div className="internal-dropdown-top-wrapper">
                <div>ABOUT</div>
                <div className="arrows">
                  <IoIosArrowDown />
                </div>
              </div>
              <ul className="internal-dropdown-content-container">
                <li>
                  <Link to="/about" className="nav-links">
                    About Clemens
                  </Link>
                </li>
                <li>
                  <Link to="/meet-our-staff" className="nav-links">
                    Meet Our Staff
                  </Link>
                </li>
                <li>
                  <Link to="/in-the-community" className="nav-links">
                    In the Community
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="nav-links">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li className="internal-dropdown">
              <div className="internal-dropdown-top-wrapper">
                <div>PRODUCTS &#38; SERVICES</div>
                <div className="arrows">
                  <IoIosArrowDown />
                </div>
              </div>
              <ul className="internal-dropdown-content-container">
                <li>
                  <Link to="/transportation-retail" className="nav-links">
                    Transportation Retail
                  </Link>
                </li>
                <li>
                  <Link to="/brokerage" className="nav-links">
                    Brokerage
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="nav-links">
                    Corporate/Individual Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="nav-links">
                    Business/Personal Insurance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="internal-dropdown">
              <div className="internal-dropdown-top-wrapper">
                <div>CLAIMS</div>
                <div className="arrows">
                  <IoIosArrowDown />
                </div>
              </div>
              <ul className="internal-dropdown-content-container">
                <li>
                  <Link to="/things-to-consider" className="nav-links">
                    Things to Consider
                  </Link>
                </li>
                <li>
                  <Link to="/report-a-claim" className="nav-links">
                    Report A Claim
                  </Link>
                </li>
                <li>
                  <Link to="/company-claim-numbers" className="nav-links">
                    Company Claim Numbers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/helpful-links" className="nav-links nav-sections-1-a">
                HELPFUL LINKS
              </Link>
            </li>
            <li>
              <Link
                to="/insurance-companies"
                className="nav-links nav-sections-1-a"
              >
                INSURANCE COMPANIES
              </Link>
            </li>
            <li>
              <Link to="/locations" className="nav-links nav-sections-1-a">
                LOCATIONS
              </Link>
            </li>
          </ul>
        </section>
        <section className="navbar-sections navbar-section-3">
          <div className={click ? "drawer-menu-wrapper-open" : "drawer-menu-wrapper-closed"}>
            <ul className="drawer-menu-menu">
              <li className="drawers drawer-first">
                  <Link className="drawer-internal" to="/get-a-quote">
                    {<AiOutlinePrinter className="navbar-icons" />} GET A QUOTE
                  </Link>
              </li>
              <li className="drawers">
                  <Link className="drawer-internal" to="/access-csr24">
                    {<MdOutlineSupportAgent className="navbar-icons" />} ACCESS
                    CSR24
                  </Link>
              </li>
              <li className="drawers">
                  <Link
                    className="drawer-internal"
                    to="/request-insurance-certificate"
                  >
                    {<TbFileCertificate className="navbar-icons" />} REQUEST
                    INSURANCE CERTIFICATE
                  </Link>
              </li>
              <li className="drawers">
                  <Link className="drawer-internal" to="/report-a-claim">
                    {<FaRegClipboard className="navbar-icons" />} REPORT A CLAIM
                  </Link>
              </li>
              <li className="drawers">
                  <Link className="drawer-internal" to="/make-a-payment">
                    {<BsCoin className="navbar-icons" />} MAKE A PAYMENT
                  </Link>
              </li>
              <li className="drawers drawer-last">
                  <Link className="drawer-internal" to="/contact-us">
                    {<BsTelephone className="navbar-icons" />} CONTACT US
                  </Link>
              </li>
            </ul>
            <div className="drawer-menu-tab">
              <div className="drawer-menu-tab-outer">
                <div className="drawer-menu-tab-inner"  onClick={handleClick}>
                  <label className="tab-text">HOW CAN WE HELP YOU?</label>
                  <div className={click ? "double-arrow-up" : "double-arrow-down"}>
                    <MdDoubleArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default NavbarDesktop;
