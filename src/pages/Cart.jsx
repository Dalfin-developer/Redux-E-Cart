import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import Swal from 'sweetalert2'

function Cart() {
  const allProductsInCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState()

  useEffect(()=>{
    setCartTotal(allProductsInCart.reduce((acc,cur)=>acc+cur.totalPrice,0))
  },[allProductsInCart])
  
  //handle derement cart
  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  //handle checkOut 
  const navigate = useNavigate()
  const handleCheckOut = ()=>{
    dispatch(emptyCart())
    Swal.fire({
      title:"Order Placed Successfully",
      text:"thankyou for purchasing with us",
      icon:"success",
      confirmButtonText:"Ok"


    })
    navigate("/")
  }
  return (
    <>
      <Header />
      <div className='container my-5'>
        <h1 className='text-primary fw-bold py-4'>User's Cart</h1>

        {allProductsInCart.length > 0 ? (
          <div className='row'>
            <div className="col-lg-8 border shadow p-3">
              <table className='table border mt-2'>
                <thead className='my-3'>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th >Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {allProductsInCart.map((item, index) => (
                    <tr key={item.id} >
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>
                        <img width={'50px'} height={'50px'} src={item.thumbnail} alt="" />
                      </td>
                      <td>
                        <div className='d-flex align-items-center '>
                          <button onClick={()=>handleDecrementCart(item)} className='btn fs-4'>-</button>
                          <input 
                            style={{ width: "40px" }} 
                            value={item.quantity} 
                            type="text" 
                            className='form-control text-center mx-1' 
                            readOnly 
                          />
                          <button onClick={()=>dispatch(incrementQuantity(item.id))} className='btn fs-4'>+</button>
                        </div>
                      </td>
                      <td>${item.totalPrice}</td>
                      <td onClick={()=>dispatch(removeCartItem(item.id))} className='text-danger fs-4 fw-bold' style={{ cursor: 'pointer' }}>X</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='float-end p-3'>
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>EMPTY CART</button>
                <Link to={'/'} className='btn btn-primary ms-5'>SHOP MORE</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className='border shadow rounded p-5 text-center'>
                <h3>Total Amount : <span className='text-danger'>{cartTotal}</span></h3>
                <hr />
                <button onClick={handleCheckOut} className='btn btn-success w-75'>Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-5 text-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="empty cart" width="150px" />
            <h1 className='mt-3'>Your Cart Is Empty</h1>
            <Link to={'/'} className="btn btn-primary mt-3">Add More</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart