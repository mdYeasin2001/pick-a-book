import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 py-5">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Search Book" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-success btn-lg" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-5 pb-5">
                {books.map(book => <Book key={book._id} book={book}/>)}
            </div>

        </div>
    );
};

export default Home;