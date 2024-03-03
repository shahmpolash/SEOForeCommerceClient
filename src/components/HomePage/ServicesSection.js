import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>

<section className="service-section section-gap" id="service-sec">
  <div className="container">
    {
      service.map(e=><div className="section-heading text-center mb-30">
      <h2 className="title">{e.serviceHeading}</h2>
      <span className="tagline">{e.servicesubHeading}</span>
    </div>)
    }
    
    <div className="row justify-content-center">

      {
        items.map(s=><div className="col-lg-4 col-sm-6 wow fadeInUp">
        <div className="iconic-box icon-left mt-30">
          <div className="icon">
            <img src={s.serviceIcon} alt="Icon" />
          </div>
          <div className="content">
            <h5 className="title">
              <a href="service-details.html">{s.serviceTitle}</a>
            </h5>
            <p>{s.serviceDetails}</p>
          </div>
        </div>
      </div>)
      }
      
      
   
      
      
    </div>
  </div>
</section>

    </>


  );
};

export default ServicesSection;
