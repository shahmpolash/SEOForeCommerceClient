import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditFooterSocial = () => {

    const [footersocial, setFootersocial] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/footer-social/${id}`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, []);


    const handleFootersocial = (event) => {
        event.preventDefault();

        
        const fblink = event.target.fblink.value;
        const inslink = event.target.inslink.value;






        const footerSection = {
          
            fblink,
            inslink,






        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/footer-social/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(footerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Social Link is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Footer Socail Link </h2>



                            <form class="contact-form " onSubmit={handleFootersocial}>
                                <div class="row">

                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="fblink" defaultValue={footersocial.fblink} placeholder="Facebook URL" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="inslink" defaultValue={footersocial.inslink} placeholder="Instagram URL" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="template-btn" data-delay=".8s"> Update Footer</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>


            </section>
        </div>
    );
};

export default EditFooterSocial;