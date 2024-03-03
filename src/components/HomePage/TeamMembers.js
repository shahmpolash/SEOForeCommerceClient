import React, { useEffect, useState } from 'react';

const TeamMembers = () => {

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



  return (
    <>
   <section className="team-section section-gap-bottom">
  <div className="container-fluid container-1600">
    <div className="row team-member-items">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/01.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Geraldo M. Lundy</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/02.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Sevin P. Gonzalez</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/03.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Michael K. Walker</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/04.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Geraldo M. Lundy</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/05.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Steven H. Brown</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/06.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Dana J. Bingham</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/07.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Russell K. McCormick</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="member-item mt-30">
          <div className="member-photo">
            <img src="assets/img/team-member/08.jpg" alt="Image One" />
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul>
          </div>
          <h4 className="name"><a href="#">Michael H. Thompson</a></h4>
          <span className="title">Senior Manager</span>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default TeamMembers;