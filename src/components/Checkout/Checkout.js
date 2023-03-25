import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import { useCart } from '../../CartContext/CartContext';
import './Checkout.css'

const Checkout = () => {

    const [districts, setBdDistricts] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedDivision, setSelectedDivision] = useState(null)
    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [selectDivision, setSelectDivision] = useState(false)
    const [selectDistrict, setSelectDistrict] = useState(false)
    const [inputCity, setInputCity] = useState(null)
    const [inputZip, setInputZip] = useState(null)
    const [inputRoadNo, setInputRoadNo] = useState(null)
    const [inputPhone, setInputPhone] = useState(null)
    const [inputTerms, setInputTerms] = useState(false)

    const [addressAdded, setAddressAdded] = useState(false)

    const [haveAddress, setHaveAddress] = useState(true)
    const [userAddressValue, setUserAddressValue] = useState(null)

    const [selectedAddress, setSelectedAddress] = useState(null)

    const { user } = useAuth()
    const { cartItems } = useCart()

    // Form submit access management
    useEffect(() => {
        if (haveAddress) {

        } else {
            if (selectedCountry?.length && selectedDivision?.length && selectedDistrict?.length && inputCity?.length && inputZip?.length && inputRoadNo?.length && inputPhone?.length > 1 && inputTerms === true) {
                document.getElementById("add-address-btn").disabled = false
            } else {
                document.getElementById("add-address-btn").disabled = true
            }
        }
    }, [districts, selectedCountry, selectedDivision, selectedDistrict, inputCity, inputZip, inputRoadNo, inputPhone, inputTerms])

    // Get all districts data
    useEffect(() => {
        fetch('https://arcane-sierra-30035.herokuapp.com/districts')
            .then(res => res.json())
            .then(data => setBdDistricts(data))
    }, [])

    // All select option validation
    useEffect(() => {
        if (selectedCountry === 'bd') {
            setSelectDivision(true)
            setSelectDistrict(false)
        } else if (selectedCountry === 'bd' || selectedDivision) {
            setSelectDivision(true)
            setSelectDistrict(true)
        } else {
            setSelectDivision(false)
            setSelectDistrict(false)
        }
    }, [selectedCountry, selectedDivision, selectedDistrict, selectDivision, selectDistrict])

    // Add a users address
    const addAnAddress = (e) => {
        fetch('https://arcane-sierra-30035.herokuapp.com/add-address', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                country: selectedCountry,
                division: selectedDivision,
                district: selectedDistrict,
                city: inputCity,
                zip: inputZip,
                Road: inputRoadNo,
                Phone: inputPhone,
            })
        })
            // .then(res => JSON.stringify(res))
            .then(data => {
                if (data?.status === 200) {
                    setAddressAdded(true)
                    e.target.reset()
                    setInputTerms(false)
                }
            })
            .catch(err => console.log(err))
        e.preventDefault()
    }

    // get users address
    useEffect(() => {
        fetch(`https://arcane-sierra-30035.herokuapp.com/address/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setUserAddressValue(data)
                    setSelectedAddress(data[0]._id)
                    setHaveAddress(true)
                } else {
                    setUserAddressValue(null)
                    setHaveAddress(false)
                }
            })
    }, [user?.email, addressAdded])

    // Hide Address added message
    useEffect(() => {
        setTimeout(() => setAddressAdded(false), 4000)
    }, [addressAdded])

    // Prosed To Pay
    const prossedToPay = () => {

    }

    return (
        <div className="checkoutComp mb-5">
            <div className="container">
                {
                    addressAdded &&
                    <div class="alert alert-success alert-dismissible fade show mt-4" role="alert">
                        {/* ✔  */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ marginTop: "-2px" }} class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <span className="ms-2">Address Added.</span>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <h1 className="mt-4 mb-2">Checkout</h1>
                {
                    cartItems?.length ?
                        <div className="row mt-5">
                            <div className="checkoutAddressOption col-sm-8">
                                <div className="">
                                    <div className="card-body">
                                        <h4 className="mb-3">Shipping Address</h4>
                                        {
                                            userAddressValue &&
                                            <div className="have-address-section">
                                                {
                                                    userAddressValue.map(dt => (
                                                        <div className={selectedAddress && selectedAddress === dt._id ? "card mb-4 addressActive" : "card mb-4"} id={"addressItem" + dt._id} style={{ cursor: "pointer" }} onClick={() => setSelectedAddress(dt._id)}>
                                                            <div class="modal fade checkoutAddressRemoveAlert mt-5" id={"addressDeleteModal" + userAddressValue?.indexOf(dt)} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div className="text-center mt-5">
                                                                            <h5>Delete Address</h5>
                                                                        </div>
                                                                        <div class="modal-body px-5 py-5 text-center">
                                                                            <button type="button" class="btn btn-outline-danger mb-4 px-5 addressDeleteBtn">Delete</button><br />
                                                                            <button type="button" class="btn btn-outline-secondary addressDeleteCancelBtn px-5" data-bs-dismiss="modal">Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body d-flex">
                                                                <div style={{ paddingLeft: "0" }} class="form-check col-11 d-flex">
                                                                    {
                                                                        selectedAddress && selectedAddress === dt._id &&
                                                                        <div className="text-success">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle mt-3" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                                            </svg>
                                                                        </div>
                                                                    }
                                                                    <div class="ms-3">
                                                                        <span>Road: {dt.Road}, Zip: {dt.zip},, {dt.city}, {dt.district}, {dt.division}, {dt.country === "bd" ? "Bangladesh" : dt.country}</span>
                                                                        <br />
                                                                        <span>Phone: {dt.Phone}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-1 mt-2 ms-3">
                                                                    <button className="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target={"#addressDeleteModal" + userAddressValue?.indexOf(dt)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                        {
                                            haveAddress ?
                                                <div className="">
                                                    <button onClick={() => setHaveAddress(false)} className="btn btn-outline-success px-5">Add a Address</button>
                                                </div>
                                                :
                                                <form onSubmit={addAnAddress} class="row g-3 mt-4 checkoutShippingAddress">
                                                    <h5>Add an address</h5>
                                                    <div class="col-md-6">
                                                        <label for="checkoutFormName" class="form-label">Full Name <span className="text-danger">*</span></label>
                                                        <input type="text" class="form-control" value={user?.name} id="checkoutFormName" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="checkoutFormEmail" class="form-label">Email <span className="text-danger">*</span></label>
                                                        <input type="email" class="form-control" value={user?.email} id="checkoutFormEmail" required />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="checkoutFormCountry" class="form-label">Country <span className="text-danger">*</span></label>
                                                        <select onChange={(e) => setSelectedCountry(e.target.value)} class="form-select" id="checkoutFormCountry" required >
                                                            <option selected disabled value="">Choose...</option>
                                                            <option value="bd">Bangladesh</option>
                                                            {/* <option>India</option>
                                                        <option>Pakistan</option>
                                                        <option>Nepal</option>
                                                        <option>Sri Lanka</option> */}
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="checkoutFormDivision" class="form-label">Division <span className="text-danger">*</span></label>
                                                        <select onChange={(e) => setSelectedDivision(e.target.value)} class="form-select" id="checkoutFormDivision" required>
                                                            <option selected disabled value="">Choose...</option>
                                                            {
                                                                selectDivision ?
                                                                    <>
                                                                        {
                                                                            districts ?
                                                                                <>
                                                                                    {
                                                                                        districts.map(dt => (
                                                                                            <option value={dt.name}>{dt.name}</option>
                                                                                        ))
                                                                                    }
                                                                                </>
                                                                                :
                                                                                <>
                                                                                </>
                                                                        }
                                                                    </>
                                                                    :
                                                                    <option disabled value="">Please Choose country</option>
                                                            }
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="checkoutFormDistrict" class="form-label">District <span className="text-danger">*</span></label>
                                                        <select onChange={(e) => setSelectedDistrict(e.target.value)} class="form-select" id="checkoutFormDistrict" required >
                                                            <option selected disabled value="">Choose...</option>
                                                            {
                                                                selectDivision && setSelectDistrict ?
                                                                    <>
                                                                        {
                                                                            districts ?
                                                                                <>
                                                                                    {
                                                                                        districts.find(dt => dt.name === selectedDivision)?.districts.map(dt => (
                                                                                            <option value={dt}>{dt}</option>
                                                                                        ))
                                                                                    }
                                                                                </>
                                                                                :
                                                                                <>
                                                                                </>
                                                                        }
                                                                    </>
                                                                    :
                                                                    <option disabled value="">Please Choose country & division</option>
                                                            }
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="checkoutFormCity" class="form-label">City <span className="text-danger">*</span></label>
                                                        <input onChange={(e) => setInputCity(e.target.value)} type="text" class="form-control" id="checkoutFormCity" required />
                                                    </div>
                                                    <div class="col-md-2">
                                                        <label for="checkoutFormZip" class="form-label">Zip <span className="text-danger">*</span></label>
                                                        <input onChange={(e) => setInputZip(e.target.value)} type="number" class="form-control" id="checkoutFormZip" required />
                                                    </div>
                                                    <div class="col-md-2">
                                                        <label for="checkoutFormRoad" class="form-label">Road <span className="text-danger">*</span></label>
                                                        <input onChange={(e) => setInputRoadNo(e.target.value)} type="number" class="form-control" id="checkoutFormRoad" required />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="checkoutFormPhone" class="form-label">Phone  <span className="text-danger">*</span></label>
                                                        <input onChange={(e) => setInputPhone(e.target.value)} type="number" class="form-control" id="checkoutFormPhone" required />
                                                    </div>
                                                    <div class="col-md-10 mt-5">
                                                        <div class="form-check">
                                                            <input onClick={() => inputTerms ? setInputTerms(false) : setInputTerms(true)} class="form-check-input" type="checkbox" value="" id="inputTerms" required />
                                                            <label class="form-check-label" for="inputTerms">Agree to terms and conditions</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2 mt-5">
                                                        <button class="btn btn-primary px-4 ms-3" style={{ boxShadow: "none" }} type="submit" id="add-address-btn" disabled>Save</button>
                                                    </div>
                                                </form>
                                        }
                                    </div>
                                </div>
                                <br /><br />
                                <div className="checkoutPaymentOptionSection">

                                </div>
                            </div>
                            <div className="checkoutAddressOption col-sm-4">
                                <div className="card bg-light">
                                    <div className="card-header">
                                        <h4>Order Summary</h4>
                                    </div>
                                    <div className="card-body">
                                        {
                                            cartItems?.length ?
                                                <div class="accordion" id="accordionExample">
                                                    <div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingOne">
                                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{cartItems.length} Items in Cart</button>
                                                            </h2>
                                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body checkoutSummaryItems">
                                                                    {
                                                                        cartItems.map(dt => (
                                                                            <>
                                                                                <div className="checkoutSummaryItem d-flex mb-3 pb-2">
                                                                                    <div className="col-2 mb-1">
                                                                                        <img src={dt?.img} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                    <div className="col-7 ps-1 text-sm">
                                                                                        <Link style={{ color: "rgb(94, 152, 238)", textDecoration: "none" }} to=""><small>{dt?.name}</small></Link><br />
                                                                                        <small>Items: {dt?.qty}</small>
                                                                                    </div>
                                                                                    <div className="col-3">
                                                                                        <div className="mb-2 mt-2">
                                                                                            <h6 className="ms-2 text-warning">${dt?.price * dt?.qty}.00</h6>
                                                                                        </div>
                                                                                        <div className="">
                                                                                            <div class="modal fade checkoutItemRemoveModal mt-5" id={"checkoutItemDeleteModal" + userAddressValue?.indexOf(dt)} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                                                <div class="modal-dialog">
                                                                                                    <div class="modal-content">
                                                                                                        <div className="text-center mt-5">
                                                                                                            <h5>Delete Item</h5>
                                                                                                        </div>
                                                                                                        <div class="modal-body px-5 py-5 text-center">
                                                                                                            <button type="button" class="btn btn-outline-danger mb-4 px-5 addressDeleteBtn">Delete</button><br />
                                                                                                            <button type="button" class="btn btn-outline-secondary addressDeleteCancelBtn px-5" data-bs-dismiss="modal">Cancel</button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <button className="btn btn-outline-warning btn-sm checkoutItemDeleteBtn ms-4"  data-bs-toggle="modal" data-bs-target={"#checkoutItemDeleteModal" + userAddressValue?.indexOf(dt)}>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5 text-light">
                                                        <button className="checkoutPaymentBtn btn btn-outline-info px-5 w-100 py-2">
                                                            <span>Proceed to Pay</span>
                                                            <svg style={{ marginTop: "-3px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    <div className="text-center py-5">Don't have any item in cart.</div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="checkoutShopAlert">
                            <br /><br /><br /><br />
                            <div className="text-center">
                                <span>You don't have any item in your cart.</span>
                                <br /><br />
                                <Link to="/" className="btn btn-sm btn-success">Shop Now</Link>
                            </div>
                            <br /><br /><br /><br />
                        </div>
                }
            </div>
        </div>
    );
};

export default Checkout;