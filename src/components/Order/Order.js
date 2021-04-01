import React from 'react';

const Order = ({ order }) => {
    const { bookName, price, email, date } = order;
    return (
        <tr>
            <th scope="row" className="fw-normal text-start">{bookName}</th>
            <td>${price}</td>
            <td>{date}</td>
        </tr>
    );
};

export default Order;