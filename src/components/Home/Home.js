import React from 'react';

const Home = () => {
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
        </div>
    );
};

export default Home;