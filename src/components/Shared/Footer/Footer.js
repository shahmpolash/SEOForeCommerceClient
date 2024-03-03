import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }










  return (


    <>
      <footer className="template-footer bg-color-secondary text-white-version">
        <div className="footer-cta-area">

        </div>
        <div className="container">
          <div className="footer-widgets-area">
            <div className="row">
              {
                footerAddress.map(p=><div className="col-lg-4 col-md-6">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="contact-content">
                    <div className="phone-number">
                      <span>Phone Number</span>
                      <a href="tel:+01234567899">
                        <i className="far fa-phone" />
                        {p.Phone}
                      </a>
                    </div>
                    <p>
                     {p.Location} <br />
                     {p.footerEmail}
                    </p>{
                      logo.map(l=>
                      <img src={l.logo} alt="Logo" />)
                    }
                    
                  </div>
                </div>
              </div>)
              }
              
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget nav-widget pl-lg-4">
                  <h4 className="widget-title">Quick Link</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#service-sec">Our Services</a></li>
                    <li><a href="#who-sec">About Us</a></li>
                    <li><a href="#testi-sec">Testimonial</a></li>
                    <li><a href="#contact-sec">Contact Us</a></li>

                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="widget newsletters-widget pl-xl-4">
                  <h4 className="widget-title">Newsletters</h4>
                  <p>
                    Newsletter Overview Catch up quickly with our concise summary updates.
                  </p>
                  <div className="newsletter-form">
                    <form onSubmit={handleSubscriber} action="#">
                      <input type="email" name="subemail" placeholder="Email Address" />
                      <button type="submit">Sign Up <i className="far fa-long-arrow-right" /></button>
                    </form>
                  </div>
                  {
                    footerSocial.map(s=>  <ul className="social-links">
                    <li><span>Follow</span></li>
                    <li><a href={s.fblink}><i className="fab fa-facebook-square" /></a></li>
                    <li><a href={s.inslink}><i className="fab fa-youtube-square" /></a></li>

                  </ul>)
                  }
                
                </div>
              </div>
            </div>
          </div>
          {
            footerCopyright.map(f=><div className="copyright-area">
            {f.copyrightText}
          </div> )
          }
          
        </div>
      </footer>

    </>
  );
};

export default Footer;
