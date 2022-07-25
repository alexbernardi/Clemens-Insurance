import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import photo1 from "../../assets/Clemens-09.jpg";
import photo2 from "../../assets/Clemens_59.jpg";
import photo3 from "../../assets/Clemens_46_crop_655_655.jpg";
import photo4 from "../../assets/Lisa.jpg";
import photo5 from "../../assets/Cindy.jpeg";
import bbb from "../../assets/bbb.png"
import hb from "../../assets/hb.png"
import iia from "../../assets/iia.png"
import mta from "../../assets/mta.png"
import pssl from "../../assets/pssl.png"
import ml from "../../assets/ml.png"


function Home(props) {
  const [testimonialState, setTestimonialState] = useState(0);
  const [carouselState, setCarouselState] = useState(0);
  const [activeClassCarousel, setActiveClassCarouselState] = useState(
    "carousel-images-active-right"
  );
  const [activeClassCarouselTitle, setActiveClassCarouselTitleState] = useState(
    "carousel-titles-active-right"
  );

  const handleTestimonialIncrement = () => {
    if (testimonialState === 2) {
      setTestimonialState(0);
    } else {
      setTestimonialState(testimonialState + 1);
    }
  };

  const handleTestimonialDecrement = () => {
    if (testimonialState === 0) {
      setTestimonialState(2);
    } else {
      setTestimonialState(testimonialState - 1);
    }
  };

  const handleCarouselIncrement = () => {
    setActiveClassCarouselState("carousel-images-active-right");
    setActiveClassCarouselTitleState("carousel-titles-active-right");
    if (carouselState === 4) {
      setCarouselState(0);
    } else {
      setCarouselState(carouselState + 1);
    }
  };

  const handleCarouselDecrement = () => {
    setActiveClassCarouselState("carousel-images-active-left");
    setActiveClassCarouselTitleState("carousel-titles-active-left");
    if (carouselState === 0) {
      setCarouselState(4);
    } else {
      setCarouselState(carouselState - 1);
    }
  };

  return (
    <>
      <main
        className={
          props.click ? "main-container home-inactive" : "main-container"
        }
      >
        <section className="home-main-section-1">
            <div className="img-cards-containers img-card-container-1">
            <div className="img-cards-gradient"></div>
            <div className="img-cards-content">BROKERAGE</div>
            <Link to="/brokerage" className="card-linkbox-1"></Link>
          </div>
          <div className="img-cards-containers img-card-container-2">
            <div className="img-cards-gradient"></div>
            <div className="img-cards-content">
              TRANSPORTATION <br /> RETAIL
            </div>
            <Link to="/transportation-retail" className="card-linkbox-1"></Link>
          </div>
          <div className="img-cards-containers img-card-container-3">
            <div className="img-cards-gradient"></div>
            <div className="img-cards-content">
              CORPORATE/INDIVIDUAL <br /> BENEFITS
            </div>
            <Link
              to="/benefits"
              className="card-linkbox-1"
            ></Link>
          </div>
          <div className="img-cards-containers img-card-container-4">
            <div className="img-cards-gradient"></div>
            <div className="img-cards-content">
              BUSINESS/PERSONAL <br /> INSURANCE{" "}
            </div>
            <Link
              to="/benefits"
              className="card-linkbox-1"
            ></Link>
          </div>
        </section>
        <section className="home-main-section-2">
          <div className="section-2-wrapper">
            <div className="section-2-top-container">
                <div className="section-2-about">ABOUT</div>
              <h3 className="get-to-know-us">GET TO KNOW US</h3>
              <div className="welcome">WELCOME TO CLEMENS INSURANCE</div>
            </div>
            <div className="section-2-right-container">
                <p className="section-2-paragraphs">
                Clemens Insurance is committed to achieving a high standard of
                excellence in everything we do. We are one of the largest,
                full-service, independent insurance agencies in downstate
                Illinois.
                </p>
                <p className="section-2-paragraphs">
                Clemens Insurance represents more than 45 insurance companies,
                providing transportation, business and personal insurance, plus
                corporate benefits and life and health insurance.
                </p>
                <div>
                <button className="learn-more-btn">LEARN MORE</button>
                </div>
            </div>
          </div>
        </section>
        <section className="home-main-section-3">
          <div className="section-3-wrapper">
            <div className="section-3-top-container">
              <h3 className="get-to-know-us testimonial-title">TESTIMONIALS</h3>
              <div className="what-our">WHAT OUR CLIENTS SAY</div>
              <div className="large-quote">&ldquo;</div>
            </div>
            <div className="testimonials-wrapper">
              <div
                className={
                  testimonialState === 0
                    ? "testimonial-active"
                    : "testimonial-inactive"
                }
              >
                <p className="testimonial">
                  Just wanted to give a big shout out to my Agent Reid Butts and
                  his staff at Clemens Insurance for saving me over $300/year on
                  my auto insurance....much appreciated my friend.
                </p>
                <div className="testimonial-name"> -- JEFF R.</div>
              </div>
              <div
                className={
                  testimonialState === 1
                    ? "testimonial-active"
                    : "testimonial-inactive"
                }
              >
                <p className="testimonial">
                  Great customer service! Claims are taken care of quickly and
                  very friendly agents.
                </p>
                <div className="testimonial-name"> -- MISTY L.</div>
              </div>
              <div
                className={
                  testimonialState === 2
                    ? "testimonial-active"
                    : "testimonial-inactive"
                }
              >
                <p className="testimonial">
                  Clemens Insurance is the very best!!! Very personable, when I
                  call for any questions or concerns, they are exceptional!!!!
                  They give me complete peace.
                </p>
                <div className="testimonial-name"> -- CINDY F.</div>
              </div>
            </div>
            <div className="testimonial-btn-wrapper">
              <button
                className="testimonial-btns"
                onClick={handleTestimonialDecrement}
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button
                className="testimonial-btns"
                onClick={handleTestimonialIncrement}
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
        </section>
        <section className="home-main-section-4">
          <div className="section-4-wrapper">
            <div className="section-4-top-container">
              <h3 className="get-to-know-us meet-our">MEET OUR TEAM</h3>
              <div className="welcome were-happy">WERE HAPPY TO HELP YOU OUT!</div>
            </div>
            <div className="image-carousel-wrapper">
              <button
                onClick={handleCarouselDecrement}
                className="carousel-btns"
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <div className="image-carousel-content">
                <img
                  className={
                    carouselState === 0
                      ? activeClassCarousel
                      : "carousel-images-inactive"
                  }
                  src={photo1}
                />
                <img
                  className={
                    carouselState === 1
                      ? activeClassCarousel
                      : "carousel-images-inactive"
                  }
                  src={photo5}
                />
                <img
                  className={
                    carouselState === 2
                      ? activeClassCarousel
                      : "carousel-images-inactive"
                  }
                  src={photo2}
                />
                <img
                  className={
                    carouselState === 3
                      ? activeClassCarousel
                      : "carousel-images-inactive"
                  }
                  src={photo3}
                />
                <img
                  className={
                    carouselState === 4
                      ? activeClassCarousel
                      : "carousel-images-inactive"
                  }
                  src={photo4}
                />
              </div>
              <button
                onClick={handleCarouselIncrement}
                className="carousel-btns"
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
            <div className="carousel-names">
              <div className="image-carousel-titles-content">
                <div
                  className={
                    carouselState === 0
                      ? activeClassCarouselTitle
                      : "carousel-images-inactive"
                  }
                >
                  <div className="name">SEPHANIE PENN</div>
                  <div className="position">
                    Customer Service Rep-Personal Lines
                  </div>
                </div>
                <div
                  className={
                    carouselState === 1
                      ? activeClassCarouselTitle
                      : "carousel-images-inactive"
                  }
                >
                  <div className="name">CINDY LEE</div>
                  <div className="position">
                    Customer Service Rep-Transportation
                  </div>
                </div>
                <div
                  className={
                    carouselState === 2
                      ? activeClassCarouselTitle
                      : "carousel-images-inactive"
                  }
                >
                  <div className="name">MIKE CUSHING</div>
                  <div className="position">
                    Transportation Agent-Bloomington
                  </div>
                </div>
                <div
                  className={
                    carouselState === 3
                      ? activeClassCarouselTitle
                      : "carousel-images-inactive"
                  }
                >
                  <div className="name">Richard J.</div>
                  <div className="position">Owner</div>
                </div>
                <div
                  className={
                    carouselState === 4
                      ? activeClassCarouselTitle
                      : "carousel-images-inactive"
                  }
                >
                  <div className="name">LISA WEGNER</div>
                  <div className="position">Customer Service Rep-Brokerage</div>
                </div>
              </div>
            </div>
            <button className="view-all-staff">VIEW ALL STAFF</button>
          </div>
        </section>
        <section className="home-main-section-5">
          <a
            className="section-5-images"
            href="https://www.bbb.org/us/il/bloomington/profile/insurance-companies/clemens-associates-inc-0724-3002227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bbb} />
          </a>
          <a
            className="section-5-images"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hb} />
          </a>
          <a
            className="section-5-images"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iia} />
          </a>
          <a
            className="section-5-images"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ml} />
          </a>
          <a
            className="section-5-images"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mta} />
          </a>
          <a
            className="section-5-images"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pssl} />
          </a>
        </section>
      </main>
    </>
  );
}

export default Home;
