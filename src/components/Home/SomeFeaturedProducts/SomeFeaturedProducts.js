import React, { useEffect, useState } from 'react';
import Product from '../../Reusable/Product/Product';
import './SomeFeaturedProducts.css'

const SomeFeaturedProducts = () => {

    const [products, setProduct] = useState(null)
    const [hmpMenu, setHmpMenu] = useState('all')

    useEffect(() => {
        if (hmpMenu === "all") {
            setProduct(null)
            fetch("https://arcane-sierra-30035.herokuapp.com/products")
                .then(res => res.json())
                .then(data => setProduct(data.splice(0, 6)))
                .catch(err => console.log(err.message))
        } else {
            setProduct(null)
            fetch("https://arcane-sierra-30035.herokuapp.com/products/men/" + hmpMenu)
                .then(res => res.json())
                .then(data => setProduct(data.splice(0, 6)))
                .catch(err => console.log(err.message))
        }
    }, [hmpMenu])

    return (
        <div>
            <div className="container">
                <div className="homeProductsMenuItems d-flex mt-5 mb-5">
                    <span onClick={() => setHmpMenu("all")} className={hmpMenu === "all" ? "me-4 mt-5 hpmItem hpmActive" : "me-4 mt-5 hpmItem"}>All Products</span>
                    <span onClick={() => setHmpMenu("t-shirt")} className={hmpMenu === "t-shirt" ? "me-4 mt-5 hpmItem hpmActive" : "me-4 mt-5 hpmItem"}>T-Shirt</span>
                    <span onClick={() => setHmpMenu("panjabi")} className={hmpMenu === "panjabi" ? "me-4 mt-5 hpmItem hpmActive" : "me-4 mt-5 hpmItem"}>Panjabi</span>
                </div>
                <div className="row">
                    {
                        products ?
                            <>
                                {
                                    products?.map(dt => (
                                        <div className="col-2 mb-5">
                                            <Product productData={dt} />
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <div className="hpLoader text-center my-5">
                                <div class="spinner-border text-secondary" style={{margin: "58px 0"}} role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SomeFeaturedProducts;