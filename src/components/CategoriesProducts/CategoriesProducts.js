import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../Reusable/Product/Product';
import './CategoriesProducts.css';

const CategoriesProducts = ({ men }) => {

    const [products, setProducts] = useState(null)

    const path = useParams()

    useEffect(() => {
        fetch(`https://arcane-sierra-30035.herokuapp.com/products/${men ? "men" : "women"}/${path.cate}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => {
                setProducts(null)
                console.log(err)
            })
    }, [path, men])


    return (
        <div className="categoriesProductsComp">
            <div className="container">
                {
                    products ?
                        <>

                            <h2 className="categoriesProductsPgTitle mt-5 mb-3"><span className="text-uppercase">{path.cate.slice(0, 1)}</span>{path.cate.slice(1, 40)}</h2>
                            <nav aria-label="breadcrumb mb-4">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to={men ? "/men" : "/women"}>{men ? "Men" : "Women"}</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page"><span className="text-uppercase">{path.cate.slice(0, 1)}</span>{path.cate.slice(1, 40)}</li>
                                </ol>
                            </nav><br /><br />
                            {
                                products ? (
                                    <div className="row">
                                        {
                                            products.map(dt => (
                                                <div className="col-sm-3 mb-5">
                                                    <Product productData={dt} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="categoriesProductsLoader">
                                        <br /><br /><br /><br /><br />
                                        <img src="" alt="" className="img-fluid" />
                                        <br /><br /><br /><br /><br />
                                    </div>
                                )
                            }
                        </>
                        :
                        <div className="categoriesProductsLoader">
                            <div className="text-center">
                                <div class="spinner-border text-secondary" style={{margin: "200px 0"}} role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default CategoriesProducts;