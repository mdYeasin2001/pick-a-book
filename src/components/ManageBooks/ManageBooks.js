import React, { useEffect, useState } from 'react';
import ManageBook from '../ManageBook/ManageBook';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://serene-stream-74348.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className="container py-5">
            {loading &&
                <div className="d-flex justify-content-center pt-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <table className="table table-borderless">
                <thead>
                    {books.length > 0 &&
                        <tr className="table-light">
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="text-end">Action</th>
                        </tr>
                    }
                </thead>
                <tbody>
                    {books.map(book => <ManageBook key={book._id} book={book} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooks;