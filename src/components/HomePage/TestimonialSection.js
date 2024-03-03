import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
  


    <>
<section className="testimonial-section section-gap" id="testi-sec">
  <div className="container">
    <div className="testimonial-area">
      {
        testimonialtext.map(text=> <div className="section-heading text-center mb-50">
        <h2 className="title">{text.testimonialText}</h2>
        <span className="tagline">{text.testimonialHeading}</span>
      </div>)
      }
      
      <div className=" d-flex">

        {
          testimonial.map(e=> <div className="col-lg-6">
          <div className="testimonial-item">
            <div className="content">
              <p>
              {e.desc}
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src={e.image} alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">{e.personName}</h4>
                <span className="title">{e.personTitle}</span>
              </div>
            </div>
          </div>
        </div>)
        }
        
        
        
       
      </div>
    </div>
  </div>
</section>


    

    
    
    
    </>
  );
};

export default TestimonialSection;
