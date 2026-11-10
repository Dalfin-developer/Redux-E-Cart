import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishList } from '../Redux/Slices/wishListSlice'


function View() {
  const { id } = useParams()
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  console.log(allProducts);
  const [product, setproduct] = useState([])
  useEffect(() => {
    setproduct(allProducts?.find(item => item.id == id))
  }, [allProducts, id])

  const userWishList = useSelector(state => state.wishlistReducer)
  console.log("Wishlist:", userWishList)

  //check the product already in the wishlist
  const dispatch  = useDispatch()
  const handleWishList = () => {
    const existingItem = userWishList?.find(item => item.id == product.id)
    if (existingItem) {
             Swal.fire({
              title:"Sorry",
              text : "This product is already exists in the wishlist",
              icon : "error",
              confirmButtonText:"ok"
             })
    } else {
              dispatch(addToWishList(product))
    }
  }

  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row align-items-center'>
          <div className="col-lg-6 text-center">
            <img className='img-fluid mt-3' src={product?.thumbnail} alt="No image" />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishList} className='btn btn-info'>ADD TO WISHLIST</button>
              <button className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-lg-6 my-5 ">
            <h3 className='fw-bold'>{product?.title}</h3>
            <h2 className='fw-bold'>Price : {product?.price}</h2>
            <h4 className='fw-bold'>Brand : {product?.brand}</h4>
            <h4 className='fw-bold'>Category : {product?.category} </h4>
            <h4 className='fw-bold'>Description : {product?.description} </h4>
            <h5 className='fw-bold mt-4'>Client Reviews</h5>
            {
              product?.reviews?.map((review,index)=> (
                <div key={index} className='border rounded shadow my-3 p-3'>
                  <p><span className='fw-bolder'>Name : {review.reviewerName}</span> {review.comment}</p>
                  <p><span className='fw-bolder'>Rating : {review.rating} </span><FontAwesomeIcon icon={faStar} className='text-warning' /></p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>

  )
}

export default View
