import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTeamMembersItem = () => {


    const [memberitems, setMemberItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/teamitems/${id}`)
            .then((res) => res.json())
            .then((info) => setMemberItems(info));
        console.log(memberitems)
    }, []);


    const handleMemberItemSection = (event) => {
        event.preventDefault();
        const teamMemberImg = event.target.teamMemberImg.value;
        const teamMemberName = event.target.teamMemberName.value;
        const teamMemberTitle = event.target.teamMemberTitle.value;
      
        


        const teamSection = {
            teamMemberImg,
            teamMemberName,
            teamMemberTitle,
           

        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/update-teamitems/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(teamSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Team Member Items Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>

            <div className='container vh-100 d-flex align-items-center justify-content-center mb-5'>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >



                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12 mb-5">
                                <h3> Update Team Member </h3>

                                <form class="contact-form " onSubmit={handleMemberItemSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberImg" defaultValue={memberitems.teamMemberImg} required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberName" defaultValue={memberitems.teamMemberName} required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="teamMemberTitle" defaultValue={memberitems.teamMemberTitle} required />
                                            </div>
                                        </div>
                                       

                                        <div class="slider-btn">
                                            <button class="template-btn" data-animation="fadeInRight" data-delay=".8s"> Update Team Member </button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>


                </section>
            </div>
        </>
    );
};

export default EditTeamMembersItem;