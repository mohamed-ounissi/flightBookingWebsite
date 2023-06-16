import React from "react";
import "./Slider.css";
import image1 from "../../images/offres images/ramadan.jpg";
import image2 from "../../images/offres images/istambul.jpg";
import image3 from "../../images/offres images/couple.jpg";
import image4 from "../../images/offres images/paris.jpg";
import image5 from "../../images/offres images/las-vegas.jpg";
import image6 from "../../images/offres images/abu dhabi.webp";
import image7 from "../../images/offres images/moscow.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);
const Slider = () => {
  return (
    <div className="bodySlider">
      <Swiper
        initialSlide={3}
        effect={"coverflow"}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000, // Change to the next slide after 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        centeredSlides
        calculateHeight={true}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <section id="tranding">
          <div className="container">
            <h3 className="text-center section-subheading">
              - popular Delivery -
            </h3>
            <h1 className="text-center section-heading">Tranding food</h1>
          </div>
          <div className="container">
            <div className="swiper tranding-slider">
              <div classname="test" style={{ margin: "300px 0" }}>
                <div className="swiper-wrapper">
                  {/* Slide-start */}

                  <SwiperSlide key={1} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image4} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Paris 2023</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">from</h2>
                          <h3 className="food-rating">
                            <span className="offerPrice">
                              <stong>1020</stong>
                              <sup style={{ fontSize: "25px" }}>TND</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">pay up to 5X →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={2} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image5} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Las Vegas 2023</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">from</h2>
                          <h3 className="food-rating">
                            <span className="offerPrice">
                              <stong>1570</stong>
                              <sup style={{ fontSize: "25px" }}>TND</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">pay up to 4X →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={3} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image2} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Istanbul 2023</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">from</h2>
                          <h3 className="food-rating">
                            <span className="offerPrice">
                              <stong>899</stong>
                              <sup style={{ fontSize: "25px" }}>TND</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">pay up to 6X →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={4} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image1} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Ramadan Special</h1>

                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">Discover</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={5} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image3} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Couple Special</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">up to </h2>
                          <h3 className="food-rating">
                            <span
                              className="offerPrice"
                              style={{ display: "flex" }}
                            >
                              <stong>-30</stong>
                              <sup style={{ fontSize: "25px" }}>%</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">surclassement offert</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={6} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image6} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Abu Dhabi 2023</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">from</h2>
                          <h3 className="food-rating">
                            <span className="offerPrice">
                              <stong>1140</stong>
                              <sup style={{ fontSize: "25px" }}>TND</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">pay up to 4X →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                  {/* Slide-start */}
                  <SwiperSlide key={7} style={{ width: "auto" }}>
                    <div className="swiper-slide tranding-slide">
                      <div className="tranding-slide-img">
                        <img src={image7} alt="Tranding" />
                      </div>
                      <div className="tranding-slide-content">
                        <h1 className="food-price">Moscow 2023</h1>
                        <div className="tranding-slide-content-bottom">
                          <h2 className="food-name">from</h2>
                          <h3 className="food-rating">
                            <span className="offerPrice">
                              <stong>1426</stong>
                              <sup style={{ fontSize: "25px" }}>TND</sup>
                            </span>
                          </h3>
                        </div>
                        <div
                          className="bodyforbtnoffers"
                          style={{ marginTop: "230px" }}
                        >
                          <div class="buttons">
                            <button class="slide">pay up to 3X →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Slide-end */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
