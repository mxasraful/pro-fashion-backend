import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSector.css'

const ProductsSector = () => {
    return (
        <div className="homeProductsSectorComp py-5">
            <br />  
            <br />  
            <div className="container">
                <div className="d-flex home-big-categories">
                    <Link to="/men" style={{ backgroundImage: "url(https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" }} className="col-sm-6 col-men me-4 d-flex justify-content-center align-items-center text-light">
                        <h1>MEN</h1>
                    </Link>
                    <Link to="/women" style={{ backgroundImage: "url(https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" }} className="col-sm-6 col-women d-flex justify-content-center align-items-center text-light">
                        <h1>WOMEN</h1>
                    </Link>
                </div>
            </div>
            <br />
        </div>
    );
};

export default ProductsSector;