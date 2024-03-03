import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

 

    <>

{
  about.map(a=><section className="feature-section section-gap-bottom" id="who-sec">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-md-10">
      
        <div className="feature-images row align-items-center content-mb-md-50">
          
        <img src={a.aboutImg} alt="Image" className="animate-float-bob-y" />
        </div>
      </div>
      <div className="col-lg-6 col-md-10">
        <div className="feature-text-block content-l-spacing">
          <div className="section-heading mb-50">
          <span className="tagline">{a.aboutText}</span>
            <h2 className="title">{a.aboutHeading}</h2>
            
          </div>
          <div className="feature-lists">
            <div className="simple-icon-box icon-left mb-30">
              <div className="icon">
                <i className="flaticon-crop" />
              </div>
              <div className="content">
                <h4 className="title">{a.aboutPointOne}</h4>
                <p>{a.aboutPointOneDetails}</p>
              </div>
            </div>
            <div className="simple-icon-box icon-left mb-30">
              <div className="icon">
                <i className="flaticon-crop" />
              </div>
              <div className="content">
                <h4 className="title">{a.aboutPointTwo}</h4>
                <p>{a.aboutPointTwoDetails}</p>
              </div>
            </div>
            <div className="simple-icon-box icon-left mb-30">
              <div className="icon">
                <i className="flaticon-crop" />
              </div>
              <div className="content">
                <h4 className="title">{a.aboutPointThree}</h4>
                <p>{a.aboutPointThreeDetails}</p>
              </div>
            </div>
          </div>
          <a href={a.buttonLink} className="template-btn mt-10">{a.buttonText}<i className="far fa-long-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</section> )
}


     

    </>
  );
};

export default AboutSection;
