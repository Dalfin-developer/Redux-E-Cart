import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Redux/Slices/wishListSlice';
import Swal from 'sweetalert2';
import { addCart } from '../Redux/Slices/cartSlice';



function WhishList() {
  const usersWishList = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  const userCart = useSelector(state=>state.cartReducer)

  const handleCart = (product) => {
      // check the product already exist in the cart 
      const existingItem = userCart?.find(item => item.id == product.id)
      dispatch(addCart(product))
      dispatch(removeFromWishlist(product.id))
      
               Swal.fire({
                title:"Success",
                text :existingItem?`${existingItem.title} quantity incremented`: "This product is added to the cart",
                icon : 'success',
                confirmButtonText:"ok"
               })
      }
  return (
    <>
    <Header/>
      <div className ='container my-5' >
        
        {
          usersWishList?.length>0?
          <>
              <h1 className ='text-primary fw-bold py-4'>User's Wishlist</h1>
              <div className="row g-4">
                    {/* Duplicating columns according to products  */}
                    {usersWishList.map((product,index)=>(
                      <div className="col-lg-3" key={index}>
                        {/*cards*/}
                        <Card className='shadow' >
                            <Link to={`/products/${product.id}`}><Card.Img style={{height:"250px"}} variant="top" src={product.thumbnail} /></Link>
                            <Card.Body className='text-center'>
                                <Card.Title className='mb-2'>{product.title}</Card.Title>
                                <div className='d-flex justify-content-evenly'>
                                  <FontAwesomeIcon onClick={()=>dispatch(removeFromWishlist(product.id))} icon={faHeartCircleXmark}  className='btn btn-danger mx-1 ' style={{fontSize:'10px'}} />  
                                  <FontAwesomeIcon onClick={()=>handleCart(product)} icon={faCartPlus} className='btn btn-success ' style={{fontSize:'10px'}} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
          </>
          :
            <div className='mt-5 text-center'>
              <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="empty cart" />
              <h1>Your WishList Is Empty</h1>
              <Link to={'/'} className="btn btn-primary">Add More</Link>
            </div>
          
        }
      </div>
    </>
  )
}

export default WhishList
