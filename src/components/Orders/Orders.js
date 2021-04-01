import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        fetch(`http://localhost:8080/orders/?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return (
        <div className="container py-5">
            <h1 className="display-5">Your Orders:</h1>
            <h6>Your Email: {email}</h6>
            <table className="table table-borderless text-center">
                <thead>
                    <tr className="table-light">
                        <th scope="col">Book Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <Order key={order._id} order={order}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;