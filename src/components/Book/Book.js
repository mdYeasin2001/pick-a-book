import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName, authorName, price, imageURL, _id } = book;
    
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={imageURL} className="card-img-top p-3 bg-light" alt="book-cover" />
                <div className="card-body">
                    <h4 className="card-title">{bookName}</h4>
                    <p className="card-text">{authorName}</p>
                </div>
                <div className="card-footer border-0 bg-white d-flex justify-content-between">
                    <h3>${price}</h3>
                    <Link className="btn btn-secondary" to={`/books/${_id}`}>Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;