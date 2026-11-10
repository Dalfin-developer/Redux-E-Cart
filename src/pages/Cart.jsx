import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Cart() {
  return (
    <>
    <Header/>
      <div className='container my-5'>
        <h1 className ='text-primary fw-bold py-4'>User's Wishlist</h1>
        <div className='row '>
            <div className="col-lg-8 border shadow">
              <table className='table border mt-2'>
                <thead className='my-3'>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mascara Lashes  </td>
                      <td><img width={'50px'} height={'50px'} src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" /></td>
                      <td>
                        <div className='d-flex'>
                          <button className='btn fs-1'>-</button>
                          <input style={{width:"40px"}} value={20} type="text" className='form-control' readOnly/>
                          <button className='btn fs-1'>+</button>
                        </div>
                      </td>
                      <td>$30</td>
                      <td className='text-danger fs-1 fw-bold'>X</td>
                    </tr>
                </tbody>
              </table>
              <div className='float-end p-3'>
                <button className='btn btn-danger'>EMPTY CART</button>
                <Link to={'/'} className='btn btn-info ms-5'>SHOP MORE</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='border shadow rounded p-5 text-center '>
                <h3>Total Amount : <span className='text-danger'> $ 300</span></h3>
                <hr />
                <button className='btn btn-success w-75'>Checkout</button>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Cart
