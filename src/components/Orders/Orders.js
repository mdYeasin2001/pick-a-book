import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(orders);
    useEffect(() => {
        fetch(`https://serene-stream-74348.herokuapp.com/orders/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [email])
    return (
        <>
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {orders.length > 0 &&
                <div className="container py-5">
                    <h1 className="display-5">Your Orders:</h1>
                    <h6>Your Email: {email}</h6>
                    <table className="table table-borderless text-center">
                        <thead>
                            <tr className="table-light">
                                <th scope="col" className="text-start">Book Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => <Order key={order._id} order={order} />)}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default Orders;