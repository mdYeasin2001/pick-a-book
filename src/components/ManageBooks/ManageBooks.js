import React, { useEffect, useState } from 'react';
import ManageBook from '../ManageBook/ManageBook';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="container py-5">
            <table className="table table-borderless">
                <thead>
                    <tr className="table-light">
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col" className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => <ManageBook key={book._id} book={book} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooks;