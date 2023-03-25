import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './GenderPage.css'

const GenderPage = ({ gender }) => {

    const [genderCategories, setGenderCategories] = useState(null)

    const path = window.location.pathname

    useEffect(() => {
        fetch(`https://arcane-sierra-30035.herokuapp.com/categories/${gender}`)
            .then(res => res.json())
            .then(data => {
                setGenderCategories(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [gender])

    console.log(genderCategories)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className="genderPageComp">
            {
                path.slice(1, 20) === "men" || "women" ?
                    <>
                        <div style={{ backgroundImage: `url(${path.slice(1, 20) === "men" ? "https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" : path.slice(1, 20) === "women" ? "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" : ""}` }} className="genderPageBanner mb-5">
                            <h1 className="genderPageBannerTitle text-uppercase text-center">{path.slice(1, 20)}'s</h1>
                        </div>
                    </>
                    :
                    ""
            }
            {
                genderCategories ?
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-3 ps-5">
                                <h1 className="pt-5 ps-5 mb-4">Shop By Categories</h1>
                            </div>
                            <div className="col-9 mb-5">
                                {
                                    genderCategories ?
                                        <Carousel responsive={responsive} className="genderCategoriesItems" style={{ overflowX: genderCategories?.length > 3 ? "scroll" : "hidden" }}>
                                            {
                                                genderCategories.map(dt =>
                                                    <Link style={{ textDecoration: "none" }} to={"/" + dt.for + "/" + dt.category} className="col-5 text-dark genderCategoryItem">
                                                        <div className="genderPageCategory">
                                                            <img src={dt?.img} alt="" className="img-fluid" />
                                                            <h3 className="mt-4">{dt?.category}</h3>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        </Carousel>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
        </div>
    );
};

export default GenderPage;