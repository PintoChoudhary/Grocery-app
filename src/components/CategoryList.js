import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Category from './Category';
import Endpoints from '../api/Endpoints';
function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getData = () => {
            axios.get(Endpoints.CATEGORY_URL)
                .then((res) => {
                    console.log(res.data.data);
                    setCategories(res.data.data)
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getData();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center"> All Categories</h2>
            <div className="row">
                {
                    categories.map((category, index) => <Category key={index} data={category} />)
                }
            </div>
        </div>
    )
}

export default CategoryList
