import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImg = event.target.aboutImg.value;
       
        const aboutText = event.target.aboutText.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutPointOne = event.target.aboutPointOne.value;
        const aboutPointOneDetails = event.target.aboutPointOneDetails.value;
        const aboutPointTwo = event.target.aboutPointTwo.value;
        const aboutPointTwoDetails = event.target.aboutPointTwoDetails.value;
        const aboutPointThree = event.target.aboutPointThree.value;
        const aboutPointThreeDetails = event.target.aboutPointThreeDetails.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;



        const aboutSection = {

            aboutImg,
            
            aboutText,
            aboutHeading,
            
            aboutPointOne,
            aboutPointOneDetails,
            aboutPointTwo,
            aboutPointTwoDetails,
            aboutPointThree,
            aboutPointThreeDetails,
            buttonText,
            buttonLink,


        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/update-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
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
                            <h2> Update About </h2>



                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImg" defaultValue={about.aboutImg} placeholder=" Image One" required />
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointOne" defaultValue={about.aboutPointOne} placeholder="aboutPointOne" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointOneDetails" defaultValue={about.aboutPointOneDetails} placeholder="aboutPointOneDetails" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointTwo" defaultValue={about.aboutPointTwo} placeholder="About Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointTwoDetails" defaultValue={about.aboutPointTwoDetails} placeholder="aboutPointTwoDetails" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointThree" defaultValue={about.aboutPointThree} placeholder="aboutPointThree" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointThreeDetails" defaultValue={about.aboutPointThreeDetails} placeholder="aboutPointThreeDetails" required />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="buttonText" defaultValue={about.buttonText} placeholder="Button Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="buttonLink" defaultValue={about.buttonLink} placeholder="Button Link" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default UpdateAboutSection;