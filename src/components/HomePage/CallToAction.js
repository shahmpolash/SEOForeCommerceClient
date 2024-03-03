import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);



  

  return (
    

    <>

<section className="call-to-action style-two bg-color-primary">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-lg-7">
        {
          action.map(a=> <div className="cta-content">
          <h2 className="title">{a.heading} </h2>
          <p className="subtitle">{a.subHeading} </p>
        </div> )
        }

       
      </div>
      <div className="col-auto">
        <p className="cta-note">Get Every Single Needs</p>
        <a href="/" className="template-btn bordered-btn bordered-white">Let’s Talk SEO Expertise <i className="far fa-long-arrow-right" /></a>
      </div>
    </div>
  </div>
  <div className="cta-shape">
    <img src="assets/img/shape/cta-shape.png" alt="Shape" />
  </div>
</section>

    </>
  );
};

export default CallToAction;