import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    <>
     <header className="template-header absolute-header sticky-header">
  <div className="container-fluid container-1550">
    <div className="header-inner">
      <div className="header-left">
        {
          logo.map(l=> <div className="site-logo">
          <a href="/">
            <img src={l.logo} alt="Logo" />
          </a>
        </div>)
        }
        
      </div>
      <div className="header-center">
        <nav className="nav-menu d-none d-xl-block">
          <ul className="primary-menu">
            
            <li><a href="/">Home</a></li>
            <li><a href="https://gopowerai.com/#service-sec">Our Services</a></li>
            <li><a href="https://gopowerai.com/#who-sec">Who We Are</a></li>
            <li><a href="https://gopowerai.com/#testi-sec">Testimonials</a></li>
            <li><a href="https://gopowerai.com/#contact-sec">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <ul className="header-extra">

        {
                  user ?
                    <li className="header-btns d-none d-md-block" > <Link to='/dashboard' className="template-btn" >Dashboard</Link></li>
                    :

                    <li className="header-btns d-none d-md-block">
                      <Link to='login' className="template-btn">
                        Login
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>

                }

                {
                  users.filter(u => u.userEmail === user?.email).length === 1 &&
                  <li className="header-btns d-none d-md-block" > <Link to='/admin/' className="template-btn" >Admin</Link></li>
                }
          
          
          
        </ul>
      </div>
    </div>
  </div>
  {/* Start Off Canvas */}
  <div className="slide-panel off-canvas-panel">
    <div className="panel-overlay" />
    <div className="panel-inner">
      <div className="canvas-logo">
        <img src="assets/img/logo.png" alt />
      </div>
      <div className="about-us">
        <h5 className="canvas-widget-title">About Us</h5>
        <p>
          Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperams eaque ipsa quae abillo.
        </p>
      </div>
      <div className="contact-us">
        <h5 className="canvas-widget-title">Contact Us</h5>
        <ul>
          <li>
            <i className="far fa-map-marker-alt" />
            354 Oakridge, Camden NJ 08102 - USA
          </li>
          <li>
            <i className="far fa-envelope-open" />
            <a href="/cdn-cgi/l/email-protection#12616762627d606652467b7e79773c717d7f"><span className="__cf_email__" data-cfemail="8efdfbfefee1fcfacedae7e2e5eba0ede1e3">[email&nbsp;protected]</span></a>
            <a href="/cdn-cgi/l/email-protection#ec85828a83acb885808789c28f8381"><span className="__cf_email__" data-cfemail="d8b1b6beb7988cb1b4b3bdf6bbb7b5">[email&nbsp;protected]</span></a>
          </li>
          <li>
            <i className="far fa-phone" />
            <a href="tel:+01234567899">+012 (345) 678 99</a><br />
            <a href="tel:+8563214">+8563214</a>
          </li>
        </ul>
      </div>
      <a href="#" className="panel-close">
        <i className="fal fa-times" />
      </a>
    </div>
  </div>
  {/* End Off Canvas */}
  {/* Mobile Menu */}
  <div className="slide-panel mobile-slide-panel">
    <div className="panel-overlay" />
    <div className="panel-inner">
      <div className="panel-logo">
        <img src="assets/img/logo.png" alt />
      </div>
      <nav className="mobile-menu">
        <ul className="primary-menu">
          <li>
            <a href="index.html" className="active">Home</a>
            <ul className="submenu">
              <li><a href="index.html">SEO Agency</a></li>
              <li><a href="index-2.html">Digital Agency</a></li>
              <li><a href="index-3.html">Marketing Agency</a></li>
              <li><a href="index-4.html">Digital Agency Dark</a></li>
            </ul>
          </li>
          <li>
            <a href="marketing-services.html">Services</a>
            <ul className="submenu">
              <li><a href="marketing-services.html">Marketing Services</a></li>
              <li><a href="agency-services.html">Agency Services</a></li>
              <li><a href="service-details.html">Services Details</a></li>
            </ul>
          </li>
          <li>
            <a href="portfolio.html">Works</a>
            <ul className="submenu">
              <li><a href="portfolio.html">Works One</a></li>
              <li><a href="portfolio-2.html">Works Two</a></li>
              <li><a href="portfolio-details.html">Works Details</a></li>
            </ul>
          </li>
          <li>
            <a href="blog-standard.html">Blog</a>
            <ul className="submenu">
              <li><a href="blog-standard.html">Blog Standard</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="submenu">
              <li><a href="about.html">About Us</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="faq.html">Faq</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="shop-details.html">Shop Details</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <a href="#" className="panel-close">
        <i className="fal fa-times" />
      </a>
    </div>
  </div>
</header>

    </>
  );
};

export default NavBar;
