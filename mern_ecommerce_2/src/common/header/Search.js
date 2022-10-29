import React from "react"
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/Logo-FPT_2.webp"

const Search = () => {
    return (
        <>
            <section className="search">
                <div className="container content-app  c_flex">
                    <Link to={'/'} className="logo width">
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" name="" id="" placeholder="Search and hit enter..."/>
                        <span>ALL Categories</span>
                    </div>

                    <div className="icon f_flex width">
                            <i className="fa fa-user icon-circle"></i>
                            <div className="cart">
                                <Link to='/cart'>
                                    <i className="fa fa-shopping-bag icon-circle"></i>
                                    <span>0</span>
                                </Link>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// 16:26

export default Search;