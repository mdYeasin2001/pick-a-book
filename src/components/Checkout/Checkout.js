import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [checkoutSucceed, setCheckoutSucceed] = useState(false);
    const { bookName, price } = book;
    useEffect(() => {
        fetch(`http://localhost:8080/book/${id}`)
            .then(res => res.json())
            .then(data => setBook(...data))
    }, [id]);
    const handleCheckout = () => {
        const orderInfo = { email: loggedInUser.email, bookName, price, date: new Date().toDateString('dd/MM/yyyy') };
        console.log(orderInfo);
        fetch('http://localhost:8080/addOrder', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => setCheckoutSucceed(data))
    }

    return (
        <>
            {checkoutSucceed ||
                <div className="container py-5">
                    <h1 className="display-5">Checkout</h1>

                    <div className="row">
                        <div className="col-12 pt-3 px-3 rounded shadow">
                            <table className="table table-borderless">
                                <thead>
                                    <tr className="border-bottom">
                                        <th scope="col" colSpan="2" className="text-muted">Description</th>
                                        <th scope="col" className="text-muted">Quantity</th>
                                        <th scope="col" className="text-muted text-end">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-bottom">
                                        <th scope="row" colSpan="2">{bookName}</th>
                                        <td>1</td>
                                        <td className="text-end fw-bold">${price}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colSpan="3">Total</th>
                                        <td className="text-end fw-bold">${price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className="btn btn-secondary d-block ms-auto mt-3">Checkout</button>
                </div>
            }
            {checkoutSucceed &&
                <h1 className="display-5 pt-5 text-success text-center">Your order has been completed correctly.</h1>
            }
        </>
    );
};

export default Checkout;