import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditExperience = () => {

    const [exprience, setExperience] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/experiences/${id}`)
            .then((res) => res.json())
            .then((info) => setExperience(info));
    }, [id]);



    const handleExperienceSection = (event) => {
        event.preventDefault();

        const experienceText = event.target.experienceText.value;
        const experienceHeading = event.target.experienceHeading.value;
        const experienceDetails = event.target.experienceDetails.value;
        const skillOneText = event.target.skillOneText.value;
        const skillOneNumber = event.target.skillOneNumber.value;
        const skillTwoText = event.target.skillTwoText.value;
        const skillTwoNumber = event.target.skillTwoNumber.value;
        const skillThreeText = event.target.skillThreeText.value;
        const skillThreeNumber = event.target.skillThreeNumber.value;
       




        const experienceSection = {

            experienceText,
            experienceHeading,
            experienceDetails,
            skillOneText,
            skillOneNumber,
            skillTwoText,
            skillTwoNumber,
            skillThreeText,
            skillThreeNumber,



        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/update-experiences/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(experienceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Experience Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-4" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Experience </h2>

                                <form class="contact-form " onSubmit={handleExperienceSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="experienceText" defaultValue={exprience.experienceText} placeholder="Section Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="experienceHeading" defaultValue={exprience.experienceHeading} placeholder="Section Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" name="experienceDetails" defaultValue={exprience.experienceDetails} placeholder="Section Details" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillOneText" hidden  defaultValue={exprience.skillOneText} placeholder="Skill One Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillOneNumber" hidden defaultValue={exprience.skillOneNumber} placeholder="Skill One Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillTwoText" hidden defaultValue={exprience.skillTwoText} placeholder="Skill Two Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillTwoNumber" hidden defaultValue={exprience.skillTwoNumber} placeholder="Skill Two Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillThreeText" hidden defaultValue={exprience.skillThreeText} placeholder="Skill Three Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="skillThreeNumber" hidden defaultValue={exprience.skillThreeNumber} placeholder="Skill Three Number" required />
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Experience </button>
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

export default EditExperience;