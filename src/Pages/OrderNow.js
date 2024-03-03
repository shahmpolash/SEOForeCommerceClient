import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrices] = useState({});

    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrices(info));
    }, [id]);

    const handleNewOrder = (event) => {
        event.preventDefault();
        const packagePrice = prices.packagePrice;
        const packageName = prices.packageName;
        const customerEmail = user?.email;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = 'UnPaid';
        const orderStatus = 'Pending';
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        const order = {
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,
        };

        const url = `https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/new-order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then(() => {
                navigate('/pending-order');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area pt-120 pb-90 fix mb-5">
                    <div className="container">
                        <div className="row"></div>
                        <div className="row">
                            <h1>You can purchase our {prices.packageName} Plan. Thanks</h1>

                            <form className="contact-form mt-5" onSubmit={handleNewOrder}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name mb-20">
                                            <input disabled type="text" value={prices.packageName} name="packageName" required />
                                        </div>
                                        <div className="contact-field p-relative c-name mb-20">
                                            <input disabled type="number" value={prices.packagePrice} name="packagePrice" required />
                                        </div>
                                        <div className="contact-field p-relative c-name mb-20">
                                            <input disabled type="email" value={user?.email} name="customerEmail" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-email mb-20">
                                            <input type="text" name="customerName" placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-subject mb-20">
                                            <input type="text" name="customerAddress" placeholder="Your Address" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-subject mb-20">
                                            <input type="text" name="customerCountry" placeholder="Your Country" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="paymentStatus" value="UnPaid" name="paymentStatus" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="orderStatus" value="Pending" name="orderStatus" required />
                                        </div>
                                    </div>
                                    <div className="slider-btn">
                                        <button className="template-btn" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OrderNow;
