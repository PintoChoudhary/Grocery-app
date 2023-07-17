import React from 'react'
import SubCategory from '../components/SubCategory'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

function ProductPage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SubCategory/>
            </div>
            <div className="col-md-9">
                <ProductList/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
