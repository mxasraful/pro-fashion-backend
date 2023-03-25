import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext/CartContext';
import CartItem from './CartItem/CartItem';
import './Cart.css'
import { useAuth } from '../../auth/auth';


const Cart = () => {

    const { cartItems, subtotalMoney, shipMoney, taxMoney, totalMoney } = useCart()
    const { user } = useAuth()

    return (
        <div className="cartComp">
            <div className="container">
                <h1 className="mt-4">Shopping cart</h1>
                <div className="row">
                    {
                        cartItems?.length ?
                            <>
                                <div className="col-sm-4" style={{ padding: "0" }}>

                                    <div style={{ position: "sticky", top: "0", paddingTop: "20px", paddingBottom: "50px" }}>
                                            <div className="cart-order-summary">
                                                <h4 className="py-2 bg-light cart-order-summary-title">
                                                    <span className="ms-3">Order Summary</span>
                                                </h4>
                                                <div className="cart-order-summary-options px-4">
                                                    <div className="mt-3 text-secondary">Shipping and additional costs are calculated based on values you have entered.</div>
                                                    <hr />
                                                    <div className="cart-order-summary-order-subtotal d-flex">
                                                        <h5 className="me-auto">Order Subtotal</h5>
                                                        <h5 className="text-secondary">${subtotalMoney}</h5>
                                                    </div>
                                                    <hr />
                                                    <div className="cart-order-summary-order-subtotal d-flex">
                                                        <h5 className="me-auto">
                                                            <span>Shipping and handling</span>
                                                            <button type="button" id="cartShipPopover" className="popoverBtn ms-2" data-toggle="popover"
                                                                data-bs-content="We charge $2.00 delivery for each item.">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                                                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                                                </svg>
                                                            </button>
                                                        </h5>
                                                        <h5 className="text-secondary">${shipMoney}</h5>
                                                    </div>
                                                    <hr />
                                                    <div className="cart-order-summary-order-subtotal d-flex">
                                                        <h5 className="me-auto">
                                                            <span>Tax</span>
                                                            <button type="button" id="cartTaxPopover" className="popoverBtn ms-2" data-toggle="popover"
                                                                data-bs-content="2% tax is added to the total amount.">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                                                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                                                </svg>
                                                            </button></h5>
                                                        <h5 className="text-secondary">${taxMoney}</h5>
                                                    </div>
                                                    <hr />
                                                    <div className="cart-order-summary-order-subtotal d-flex">
                                                        <h5 className="me-auto">Total</h5>
                                                        <h4 className="text-dark">${totalMoney}</h4>
                                                    </div>
                                                    <br />

                                                    <div class="tooltip bs-tooltip-top" role="tooltip">
                                                        <div class="tooltip-arrow"></div>
                                                        <div class="tooltip-inner">
                                                            Some tooltip text!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body mt-4">
                                                    <Link to={user?.email ? "/checkout" : "/login?for=checkout"} className="btn btn-outline-info px-5 py-2 ms-auto w-100">
                                                        <span>Proceed to Checkout</span>
                                                        <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                    </div>

                                </div>

                                <div className="col-sm-8 cart-order-items py-5 px-5">
                                    {
                                        cartItems?.map(dt => (
                                            <CartItem dt={dt} />
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <>
                                <div className="text-center mt-5 pt-5">
                                    <br />
                                    <span>Don't have any item in your cart.</span>
                                    <br /><br /><br />
                                    <Link to="/" className="btn btn-outline-success px-4 btn-sm mb-5" >Shop Now</Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;