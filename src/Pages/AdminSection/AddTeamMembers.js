import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTeamMembers = () => {


    const [teamtext, setTeamText] = useState([]);

    const [teamitems, setsetTeammember] = useState([]);


    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/teamstext`)
            .then((res) => res.json())
            .then((info) => setTeamText(info));
    }, []);

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/teamitems`)
            .then((res) => res.json())
            .then((info) => setsetTeammember(info));
    }, []);

    const handleTeamTextSection = (event) => {
        event.preventDefault();
        const teamHeading = event.target.teamHeading.value;
        const teamText = event.target.teamText.value;


        const teamSection = {
            teamHeading,
            teamText,


        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-teammember-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(teamSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Team Members Text is Updated');
            });
    };





    const handleMembersItemSection = (event) => {
        event.preventDefault();
        const teamMemberImg = event.target.teamMemberImg.value;
        const teamMemberName = event.target.teamMemberName.value;
        const teamMemberTitle = event.target.teamMemberTitle.value;




        const membersitemSection = {
            teamMemberImg,
            teamMemberName,
            teamMemberTitle,


        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-team-Item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(membersitemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Features Services Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix ">
                <div className='mt-5'>
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">

                                <h3 className='mt-5'> Update Team Members Text </h3>
                                {
                                    teamtext.length === 1 &&
                                    <>
                                        {teamtext.map(text =>
                                            <Link className='template-btn' to={`/team-text-edit/${text._id}`}> Update Now</Link>
                                        )}
                                    </>
                                }

                                {teamtext.length === 0 &&
                                    <form class="contact-form " onSubmit={handleTeamTextSection}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" name="teamText" placeholder="Team Section Text" required />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="contact-field p-relative c-name mb-20">
                                                    <input type="text" name="teamHeading" placeholder="Team Heading" required />
                                                </div>
                                            </div>

                                            <div class="slider-btn">
                                                <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Add Team Members Text </button>
                                            </div>
                                        </div>

                                    </form>
                                }




                                <h3 className='mt-5'> Add Team Members Item </h3>

                                <form class="contact-form " onSubmit={handleMembersItemSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberImg" placeholder="Member Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberName" placeholder="Member Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberTitle" placeholder="Member Title" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="template-btn" data-delay=".8s"> Add Member Item</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                    <div className="container">
                        


                        <div className="row gy-4 justify-content-center mb-5">




                        </div>

                        <section className="team-area bg-top-center overflow-hidden space">
                            <div className="container">
                                {
                                    teamtext.map(t => <div className="title-area text-center">
                                        <span className="sub-title">{t.teamText}</span>
                                        <h2 className="sec-title">{t.teamHeading}</h2>
                                    </div>)
                                }

                                <div className="row slider-shadow th-carousel teamSlide1" id="teamSlide1" data-slide-show={4} data-lg-slide-show={3} data-md-slide-show={2} data-sm-slide-show={2} data-xs-slide-show={1} data-arrows="true">
                                    {
                                        teamitems.map(m => <div className="col-sm-6 col-lg-4 col-xxl-3">
                                            <div className="th-team team-box wow fadeInUp">
                                                <div className="team-img">
                                                    <img src={m.teamMemberImg} alt="Team" />
                                                </div>
                                                <h3 className="box-title">{m.teamMemberName}</h3>
                                                <Link to={`/edit-team-items/${m._id}`}><h3 className="box-title" class="template-btn">Edit Now</h3></Link>


                                            </div>
                                        </div>)
                                    }






                                </div>
                            </div>
                        </section>

                    </div>




                </div>
            </section></>

    );
};

export default AddTeamMembers;







