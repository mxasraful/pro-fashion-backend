import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../../auth/auth';
import { useCart } from '../../../CartContext/CartContext';
import './Header.css';

const Header = () => {

    const [categories, setCategories] = useState(null)
    const [menCategories, setMenCategories] = useState(null)
    const [womenCategories, setWomenCategories] = useState(null)

    const { user } = useAuth()
    const { cartItems } = useCart()

    const path = useLocation()

    useEffect(() => {
        fetch(`https://arcane-sierra-30035.herokuapp.com/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                const forMen = data.filter(dt => dt.for === 'men')
                const forWomen = data.filter(dt => dt.for === 'women')
                setMenCategories(forMen)
                setWomenCategories(forWomen)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="">
            {
                path.pathname === "/" ?
                    <div className="bg-light">
                        <div className="container header-top-panel py-2 d-flex">
                            <div className="header-top-left text-dark">
                                <a target="blank" href="https://facebook.com/asrafulweb" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-dark me-2" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a target="blank" href="https://twitter.com/asrafulweb" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-dark me-2" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a href="tel:020800456747" className="text-dark" style={{ textDecoration: "none" }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone text-dark" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <span className="ms-2">020-800-456-747</span>
                                </a>
                            </div>
                            <div className="ms-auto">
                                Free Delivery
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
            <nav class={path.pathname === "/" ? "navbar navbar-expand-lg navbar-light py-3" : "navbar navbar-expand-lg navbar-light py-3 bg-light"}>
                <div class="container">
                    <Link class="navbar-brand" style={{ fontSize: "25px" }} to="/">Pro Fashion</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 headerMenu">
                            <li class="nav-item me-3">
                                <Link class={path?.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item dropdown me-3">
                                <a class={path?.pathname === "/men" || path?.pathname.startsWith("/men") ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
                                <ul class="dropdown-menu">
                                    <h4 className="ms-2">Men</h4>
                                    <hr />
                                    {
                                        menCategories ?
                                            <>
                                                {
                                                    menCategories.map(dt => (
                                                        <li>
                                                            <a class="dropdown-item" href={"/men/" + dt.category}>
                                                                <span className="text-uppercase">{dt.category.slice(0, 1)}</span>
                                                                <span className="text-lowercase">{dt.category.slice(1, 100)}</span>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                            :
                                            ""
                                    }
                                </ul>
                            </li>
                            <li class="nav-item dropdown me-3">
                                <a class={path?.pathname === "/women" || path?.pathname.startsWith("/women") ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</a>
                                <ul class="dropdown-menu">
                                    <h4 className="ms-2">Women</h4>
                                    <hr />
                                    {
                                        womenCategories ?
                                            <>
                                                {
                                                    womenCategories.map(dt => (
                                                        <li>
                                                            <a class="dropdown-item" href={"/women/" + dt.category}>
                                                                <span className="text-uppercase">{dt.category.slice(0, 1)}</span>
                                                                <span className="text-lowercase">{dt.category.slice(1, 100)}</span>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                            :
                                            ""
                                    }
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex headerSearch">
                            <input type="text" placeholder="Search..." className="headerSearchInput" />
                            <button className="headerSearchSubmit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                        <div className="ms-5">
                            <Link className={path?.pathname === "/cart" ? "me-4 active" : "me-4"} style={{textDecoration: "none"}} to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-basket text-secondary" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                {
                                    cartItems?.length > 0 ?
                                        <span style={{marginLeft: "5px", marginTop: "1px"}} className="headerCartItemsLength">
                                            {cartItems?.length}
                                        </span>
                                        :
                                        ""
                                }
                            </Link>
                            <Link className={path?.pathname === "/wishlist" ? "me-4 active" : "me-4"} to="/wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart text-secondary" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </Link>
                            <Link className={path?.pathname === "/my-account" ? "me-4 active" : "me-4"} to="/my-account">
                                {
                                    user?.photo ?
                                        <img src={user?.photo} alt="" style={{ width: "25px" }} className="img-fluid" />
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person text-secondary" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                }
                            </Link>
                            <Link className={path?.pathname === "/my-account" ? "me-4 active" : "me-4"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list text-secondary" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </Link>
                            {/* Right Categories */}
                            <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <div id="offcanvasRightLabel"></div>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <h4>Categories</h4>
                                    <ul class="list-group list-group-flush mb-5">
                                        {
                                            categories?.map(dt => (
                                                <li class="list-group-item">
                                                    <Link className="nav-link text-dark" data-bs-dismiss="offcanvas" aria-label="Close" to={`/${dt.for}/${dt.category}`}>
                                                        <span className="text-uppercase">{dt.category.slice(0, 1)}</span>
                                                        <span className="text-lowercase">{dt.category.slice(1, 100)}</span>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="header-top-left text-dark mt-5">
                                        <h4 className="mb-4">Contact</h4>
                                        <a target="blank" href="https://facebook.com/asrafulweb" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-dark me-2" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a target="blank" href="https://twitter.com/asrafulweb" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-dark me-2" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a href="tel:020800456747" className="text-dark" style={{ textDecoration: "none" }} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone text-dark" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                            <span className="ms-2">020-800-456-747</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header right drowar */}
            <div>
            </div>



        </div>
    );
};

export default Header;
