import React from 'react';
import { Navigate } from 'react-router-dom';

const ContactUs = () => {


  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-messages');
        alert('Message is Updated');
      });
  };
  return (
    <>
      <section className="contact-from-area section-gap" id="contact-sec">
        <div className="container">
          <div className="contact-from">
            <div className="section-heading text-center mb-60">
              <h2 className="title">Send Us Message</h2>
              <span className="tagline">Send a message for prompt assistance and support.</span>
            </div>
            <form onSubmit={handleMessage} >
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" name='name' placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" name='number' placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field">
                    <input type="email" name='email' placeholder="Email Address" />
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="input-field">
                    <input type="text" name='subject' placeholder="Subject" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <input type="text" hidden name='messageStatus' value="UnRead" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-field">
                    <textarea placeholder="Message" name='message' defaultValue={""} />
                  </div>
                </div>
                <div className="col-12">
                  <button className="template-btn w-100">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


    </>
  );
};

export default ContactUs;