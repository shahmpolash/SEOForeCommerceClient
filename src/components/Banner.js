import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    // 
    <>
    {
      banners.map(b=><section className="hero-area-two have-animate-icons">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
              <span className="tagline">{b.buttonTwoLink}</span>
              <h1 className="hero-title">
                {b.bannerHeading}
              </h1>
              <p>
                {b.bannerDetails}
              </p>
              <a href={b.buttonOneLink}className="template-btn">
                {b.buttonOneText} <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
              <img src={b.bannerImage} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
      <div className="animate-icons">
        <img src="assets/img/shape/gradient-pipe.png" alt="particles" className="icon-one animate-rotate-me" />
        <img src="assets/img/shape/wave-line.png" alt="particles" className="icon-two animate-float-bob-x" />
        <img src="assets/img/shape/stars.png" alt="particles" className="icon-three animate-float-bob-x" />
        <img src="assets/img/shape/triangle.png" alt="particles" className="icon-four animate-float-bob-y" />
        <img src="assets/img/shape/triangle-2.png" alt="particles" className="icon-five animate-rotate-me" />
        <img src="assets/img/shape/circle.png" alt="particles" className="icon-six animate-zoom-fade" />
        <img src="assets/img/shape/circle-small.png" alt="particles" className="icon-seven animate-float-bob-y" />
      </div>
    </section> )
    }

</>
  );
};

export default Banner;
