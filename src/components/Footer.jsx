import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { FaSitemap} from "react-icons/fa";
import MessageForm from "./MessageForm";
import cLogo from "../assets/cybernauticLogo.png";


function Footer(props) {
  return (
    <>
      <footer className={props.click ? "footer-wrapper footer-inactive" : "footer-wrapper" }>
        <section className="footer-section-1">
          <div className="contact-bg">CONTACT</div>
          <div className="get-in-touch-container">
            <div className="section-1-header">
              <h5 className="get-in-touch">GET IN TOUCH</h5>
              <h6 className="wed-love-to-hear">WE'D LOVE TO HEAR FROM YOU</h6>
            </div>
            <div className="info-containers">
              <h5 className="information-text">HEADQUARTERS</h5>
              <div>P.O. Box 128</div>
              <div>2806 E. Empire St</div>
              <div>Bloomington, IL 61702</div>
            </div>
            <div className="info-containers telephone-fax">
              <h5 className="information-text">TELEPHONE</h5>
              <div>309 662 2100</div>
            </div>
            <div className="info-containers telephone-fax">
              <h5 className="information-text">FAX</h5>
              <div>309 662 2134</div>
            </div>
            <div className="info-containers hours-container">
              <h5 className="information-text hours">HOURS</h5>
              <div className="day-time">MONDAY - FRIDAY</div>
              <div className="day-time time">8:00 AM - 4:30PM</div>
            </div>
            <div className="footer-social-media-container">
              <a
                className="footer-social-media-icons"
                href="https://www.facebook.com/ClemensInsurance"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<CgFacebook />}
              </a>
              <a
                className="footer-social-media-icons"
                href="https://twitter.com/clemensins"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<IoLogoTwitter />}
              </a>
              <a
                className="footer-social-media-icons"
                href="https://www.linkedin.com/company/clemens-insurance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<GrLinkedinOption />}
              </a>
            </div>
                <p className="info-p">
                Please note completion of any request(s)&nbsp;for information does not constitute the purchase of insurance. No coverage may be added, changed or bound as a result of submitting a request for information or quotation of insurance. All coverage must be confirmed by the agency in writing subject to an acceptable signed application meeting the underwriting guidelines of the Insurance Company.
                </p>
            </div>
        </section>
        <section className="footer-section-2">
            <MessageForm />
        </section>
        <section className="footer-section-3">
            <div className="section-3-container">
                <div>
                    <Link className="site-map" to="/site-map">
                        <FaSitemap />
                        <label>SITEMAP</label>
                    </Link>
                </div>
                <div className="policy">
                    <label>Privacy Policy</label>
                    <label>Accessibility Statement</label>
                </div>
                <div>
                    <a href="https://www.cybernauticdesign.com/">
                        <img className="c-logo" src={cLogo} alt="logo" />
                    </a>
                </div>
            </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
