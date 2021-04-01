import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const ManageBook = ({book}) => {
    const {bookName, authorName, price} = book;
    return (
        <tr>
            <th scope="row" className="fw-normal">{bookName}</th>
            <td>{authorName}</td>
            <td>{price}</td>
            <td className="text-end">
                <button className="btn btn-success me-1"><FaPen/></button>
                <button className="btn btn-danger"><MdDelete/></button>
            </td>
        </tr>
    );
};

export default ManageBook;