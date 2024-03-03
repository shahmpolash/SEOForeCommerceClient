import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {
            servicesubHeading,
            serviceHeading,


        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mt-5'> Update Service </h2>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='template-btn' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">



                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="servicesubHeading" placeholder="Service Sub Heading" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2 className='mt-5'>Add Service</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">



                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>



                        {/* <section className="service-section section-gap bg-color-secondary section-doted-bg mt-5">
                            <div className="">



                                <div className="row pt-70 ">
                                    

                                    <section className="service-sec overflow-hidden space mb-5" id="service-sec" style={{
                                        backgroundImage:
                                            "url(https://i.postimg.cc/rF6FKZdL/service-bg-2.jpg)",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",

                                    }}>
                                        <div className="container">
                                            {
                                                service.map(s => <div className="title-area text-center">
                                                    <span className="sub-title">{s.serviceHeading}</span>
                                                    <h2 className="sec-title">{s.servicesubHeading}</h2>
                                                </div>)
                                            }

                                            <div className="row gy-4 justify-content-between align-items-center">
                                                <div className="service-card_wrap style2">
                                                    {
                                                        items.map(b => b.serviceName === 'Main' && <div className="service-card style1 wow fadeInUp" style={{
                                                            backgroundImage:
                                                                "url(https://i.postimg.cc/yxpdG71g/about-bg-1.jpg)",

                                                        }}>
                                                            <div className="service-card_img">
                                                                <img src={b.serviceImg} alt="image" />
                                                            </div>
                                                            <div className="service-card_content">
                                                                <div className="service-card_icon">
                                                                    <img src={b.serviceIcon} alt="Icon" />
                                                                </div>
                                                                <h3 className="box-title">{b.serviceTitle}</h3>
                                                                <Link to={`/main-service-edit/${b._id}`} className='btn btn-primary'>Edit Services</Link>
                                                                <p className="service-card_text">{b.serviceDetails}</p>

                                                            </div>
                                                        </div>)
                                                    }

                                                    <div className="service-card_wrap">

                                                        {
                                                            items.map(i => i.serviceName === 'NotMain' &&
                                                                <div className="service-card wow fadeInRight" style={{
                                                                    backgroundImage:
                                                                        "url(https://i.postimg.cc/yxpdG71g/about-bg-1.jpg)",

                                                                }}>
                                                                    <div className="service-card_content">
                                                                        <div className="service-card_icon">
                                                                            <img src={i.serviceIcon} alt="Icon" />
                                                                        </div>
                                                                        <h3 className="box-title">{i.serviceTitle}</h3>
                                                                        <Link to={`/service-edit/${i._id}`} className='btn btn-primary'>Edit Services</Link>
                                                                        <p className="service-card_text">{i.serviceDetails}</p>

                                                                    </div>
                                                                </div>)
                                                        }




                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>







                                </div>
                            </div>
                        </section> */}


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
              <Link to={`/service-edit/${s._id}`} className='btn btn-primary'>Edit Services</Link>
            </h5>
            <p>{s.serviceDetails}</p>
          </div>
        </div>
      </div>)
      }
      
      
   
      
      
    </div>
  </div>
</section>





                    </div>
                </div>

            </section>

        </>
    );
};

export default ServicesSection;