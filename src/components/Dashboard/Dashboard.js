import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';

const Dashboard = () => {

    const { user, logOut } = useAuth()

    return (
        <div className="dashboardComp">

            {/* Edit Profile Modal */}
            <div class="modal fade" id="accEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Account Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body px-4 py-5">
                            <div className="mb-4">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row mt-5">
                    {
                        user ?
                            <>
                                <div className="col-sm-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <h4>Account</h4>
                                                <button type="button" className="ms-auto btn btn-outline-warning btn-sm px-3" data-bs-toggle="modal" data-bs-target="#accEditModal" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill me-2" viewBox="0 0 16 16">
                                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                                    </svg>
                                                    <span>Edit Account Details</span>
                                                </button>
                                            </div>
                                            <div className="dashAccountDetails text-center mt-5">
                                                <div className="dashAccountPhoto">
                                                    <img src={user?.photo} alt="" className="img-fluid" />
                                                </div>
                                                <h4 className="mt-3">{user?.name}</h4>
                                                <span className="mt-3 mb-5">{user?.email}</span><br /><br />
                                                <button onClick={logOut} className="btn btn-sm px-3 btn-outline-danger">Sign Out</button>
                                                <br /><br /><br /><br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>My Orders</h4>
                                            <div className="dashMyOrders">
                                                <br /><br /><br /><br /><br /><br />
                                                <div className="text-center">
                                                    <span>Sorry you don't have any order.</span><br /><br />
                                                    <Link to="/" className="btn btn-outline-success px-3 btn-sm">Order Now</Link>
                                                </div>
                                                <br /><br /><br /><br /><br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="dashLoginAlert">
                                <div className="text-center">
                                    <h4>You don't have any logged in account</h4>
                                    <button className="btn btn-outline-success">Login</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;