import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const ManageBook = ({book}) => {
    const {bookName, authorName, price , _id} = book;
    const [bookDeleted, setBookDeleted] = useState(false);
    const handleDeleteBook = (id) => {
        fetch(`https://serene-stream-74348.herokuapp.com/deleteBook/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => setBookDeleted(data))
    } 
    return (
        <tr className={bookDeleted ? "d-none": ""}>
            <th scope="row" className="fw-normal">{bookName}</th>
            <td>{authorName}</td>
            <td>{price}</td>
            <td className="text-end">
                <button className="btn btn-success me-1"><FaPen/></button>
                <button onClick={() => handleDeleteBook(_id)} className="btn btn-danger"><MdDelete/></button>
            </td>
        </tr>
    );
};

export default ManageBook;