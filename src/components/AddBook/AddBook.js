import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null);
    const [addBookSucceed, setAddBookSucceed] = useState(false);
    console.log(imageURL);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const { bookName, authorName, price } = data;
        const bookData = { bookName, authorName, price, imageURL }
        console.log(bookData)
        if (imageURL) {
            fetch('http://localhost:8080/addBook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
                .then(res => res.json())
                .then(data => setAddBookSucceed(data))
        }
        
    };

    // console.log(watch("example"));

    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'c2772d06761e65ea8652500494ef14a7');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <div className="container py-5">
            {addBookSucceed ||
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-1 row-cols-md-2 bg-light p-4 gx-4 rounded shadow">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="bookName" className="form-label">Book Name</label>
                            <input type="text" name="bookName" className="form-control" id="bookName" placeholder="Book Name" ref={register({ required: true })} />
                            {errors.bookName && <span className="text-danger">Book name is required</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Book Price</label>
                            <input type="text" name="price" className="form-control" id="price" placeholder="Book Price" ref={register({ required: true })} />
                            {errors.price && <span className="text-danger">Book price is required</span>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="authorName" className="form-label">Author Name</label>
                            <input type="text" name="authorName" className="form-control" id="authorName" placeholder="Author Name" ref={register({ required: true })} />
                            {errors.authorName && <span className="text-danger">Author name is required</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Add Book Cover Photo</label>
                            <input type="file" onChange={handleImageUpload} name="file" className="form-control" id="file" placeholder="Book Price" ref={register({ required: true })} />
                            {errors.file && <span className="text-danger">Book cover photo is required</span>}
                        </div>
                    </div>
                </div>

                <input className="btn btn-secondary ms-auto d-block mt-3" value="Save" type="submit" />
            </form>
            }
            {addBookSucceed &&
                <h1 className="display-5 pt-5 text-success text-center">Book Added Successfully.</h1>
            }
        </div>
    );
};

export default AddBook;