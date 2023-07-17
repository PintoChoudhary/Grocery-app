import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Endpoints from '../api/Endpoints'
import { useParams } from 'react-router-dom'
function SubCategory() {
    const {catId} = useParams()
    const [subcategories, setSubcategories] = useState([])
    const getData = () => {
        axios.get(Endpoints.SUB_CATEGORY_URL + catId)
            .then((res) => {
                setSubcategories(res.data.data)
            })
            .catch((error) => { console.log(error); })
    }
    useEffect(() => {
        getData()
    }, [catId])
    return (
        <div>
            <h2 className="text-center">Sub-Category</h2>
            <ul className="list-group">
                {
                    subcategories.map((subCategory , index ) => (<li key={index} className="list-group-item">{subCategory.subName}</li>))
                }
            </ul>
        </div>
    )
}

export default SubCategory
