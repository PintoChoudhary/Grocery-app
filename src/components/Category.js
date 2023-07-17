import React from 'react'
import Constants from '../api/Constants';
import { Link } from "react-router-dom";
function Category(props) {
    const { catId, catName, catImage } = props.data;
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={Constants.IMAGE_URL + catImage}></img>
                <div className="card-body">
                    <h5 className="card-title">{catName}</h5>
                    <Link to={"/products/ " + catId} className="btn btn-primary btn-block">Select Category</Link>
                </div>
            </div>
        </div>
    )
}

export default Category
