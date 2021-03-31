import React from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className="container py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-1 row-cols-md-2 bg-light p-4 gx-4 rounded">
                    <div className="col">
                        <div className="mb-3">
                            <label for="bookName" className="form-label">Book Name</label>
                            <input type="text" name="bookName" className="form-control" id="bookName" placeholder="Book Name" ref={register({ required: true })} />
                            {errors.bookName && <span className="text-danger">Book name is required</span>}
                        </div>

                        <div className="mb-3">
                            <label for="price" className="form-label">Book Price</label>
                            <input type="text" name="price" className="form-control" id="price" placeholder="Book Price" ref={register({ required: true })} />
                            {errors.price && <span className="text-danger">Book price is required</span>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label for="authorName" className="form-label">Author Name</label>
                            <input type="text" name="authorName" className="form-control" id="authorName" placeholder="Author Name" ref={register({ required: true })} />
                            {errors.authorName && <span className="text-danger">Author name is required</span>}
                        </div>

                        <div className="mb-3">
                            <label for="file" className="form-label">Add Book Cover Photo</label>
                            <input type="file" name="file" className="form-control" id="file" placeholder="Book Price" ref={register({ required: true })} />
                            {errors.file && <span className="text-danger">Book cover photo is required</span>}
                        </div>
                    </div>
                </div>

                <input className="btn btn-secondary ms-auto d-block mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;