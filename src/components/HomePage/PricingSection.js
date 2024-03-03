import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (



    <>
      <div>

        {/*====== Pricing Section Start ======*/}
        <section className="pricing-section pricing-section-line section-gap pricing-blur-bg">
          <div className="container">
            <div className="section-heading text-center mb-50">
            <span className="tagline">Pricing Plan</span>
              <h2 className="title">Best Pricing For Business</h2>
              
            </div>
            <div className="pricing-tab-nav">

            </div>
            <div className="tab-content" id="pricingTabContent">
              <div className="tab-pane fade show active" id="monthly" role="tabpanel">
                <div className="row align-items-center justify-content-center">

                  {
                    pricing.map(b => b.packageName === 'Basic' &&
                      <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="pricing-table mt-40">
                          <h4 className="plan-name">{b.packageName} Plan</h4>
                          <p>
                            Elevate Your Website's Ranking with Our Essential SEO Package
                          </p>
                          <div className="plan-price">
                            <span className="currency">$</span>
                            <span className="price">{b.packagePrice}</span>
                          </div>

                          <Link to={`/order-now/${b._id}`} className="template-btn bordered-btn"> {b.packageButtonText} <i className="far fa-long-arrow-right" /></Link>

                          <ul className="feature-list">

                            <li> <i className="far fa-check" />{b.packagePointOne}</li>
                            <li> <i className="far fa-check" /> {b.packagePointTwo}</li>
                            <li> <i className="far fa-check" /> {b.packagePointThree}</li>
                            <li><i className="far fa-check" />  {b.packagePointFour}</li>
                            <li> <i className="far fa-check" /> {b.packagePointFive}</li>
                            <li> <i className="far fa-check" /> {b.packagePointSix}</li>
                            <li> <i className="far fa-check" /> {b.packagePointSeven}</li>
                          </ul>
                        </div>
                      </div>

                    )
                  }


                  {
                    pricing.map(s => s.packageName === 'Premium' &&

                      <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="pricing-table featured-plan mt-40">
                          <h4 className="plan-name">{s.packageName} Plan</h4>
                          <p>
                            Dominate Search Results with Our Comprehensive SEO Strategy
                          </p>
                          <div className="plan-price">
                            <span className="currency">$</span>
                            <span className="price">{s.packagePrice}</span>
                          </div>


                          <Link to={`/order-now/${s._id}`} className="template-btn bordered-btn"> {s.packageButtonText} <i className="far fa-long-arrow-right" /></Link>

                          <ul className="feature-list">
                            <li><i className="far fa-check" /> {s.packagePointOne}</li>
                            <li><i className="far fa-check" /> {s.packagePointTwo}</li>
                            <li> <i className="far fa-check" />{s.packagePointThree}</li>
                            <li> <i className="far fa-check" />{s.packagePointFour}</li>
                            <li><i className="far fa-check" /> {s.packagePointFive}</li>
                            <li><i className="far fa-check" /> {s.packagePointSix}</li>
                            <li><i className="far fa-check" /> {s.packagePointSeven}</li>
                            <li><i className="far fa-check" /> {s.packagePointEight}</li>
                            <li> <i className="far fa-check" />{s.packagePointNine}</li>
                            <li> <i className="far fa-check" />{s.packagePointTen}</li>

                          </ul>
                          <span className="featured-label">
                            Popular
                          </span>
                        </div>
                      </div>
                    )

                  }



                  {
                    pricing.map(p => p.packageName === 'Standard' &&

                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="pricing-table mt-40">
                      <h4 className="plan-name">{p.packageName} Plan</h4>
                      <p>
                        Experience Unparalleled Success with Our Premium SEO Solutions
                      </p>
                      <div className="plan-price">
                        <span className="currency">$</span>
                        <span className="price">{p.packagePrice}</span>
                      </div>
                      
                      <Link to={`/order-now/${p._id}`} className="template-btn bordered-btn"> {p.packageButtonText} <i className="far fa-long-arrow-right" /></Link>

                      <ul className="feature-list">
                      <li> <i className="far fa-check" />{p.packagePointOne}</li>
                            <li> <i className="far fa-check" /> {p.packagePointTwo}</li>
                            <li> <i className="far fa-check" /> {p.packagePointThree}</li>
                            <li><i className="far fa-check" />  {p.packagePointFour}</li>
                            <li> <i className="far fa-check" /> {p.packagePointFive}</li>
                            <li> <i className="far fa-check" /> {p.packagePointSix}</li>
                            <li> <i className="far fa-check" /> {p.packagePointSeven}</li>
                      </ul>
                    </div>
                  </div>
                    )
                  }




                  
                </div>
              </div>

            </div>
          </div>
        </section>
        {/*====== Pricing Section End ======*/}
      </div>



    </>
  );
};

export default PricingSection;