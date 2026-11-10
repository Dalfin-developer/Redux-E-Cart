import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

function WhishList() {
  const usersWishList = useSelector(state=>state.wishlistReducer)
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
                    {usersWishList.map(pro=>(
                      <div className="col-lg-3">
                        {/*cards*/}
                        <Card className='shadow'>
                            <Card.Img style={{height:"250px"}} variant="top" src={pro.thumbnail} />
                            <Card.Body className='text-center'>
                                <Card.Title className='mb-2'>{pro.title}</Card.Title>
                                <div className='d-flex justify-content-evenly'>
                                  <FontAwesomeIcon icon={faHeart} className='btn btn-danger mx-1 ' style={{fontSize:'10px'}} />  
                                  <FontAwesomeIcon icon={faCartPlus} className='btn btn-success ' style={{fontSize:'10px'}} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
          </>
          :
            <div>
              <h1>Your WishList Is Empty</h1>
              <Link to={'/'} className="btn btn-primary">Add More</Link>
            </div>
          
        }
      </div>
    </>
  )
}

export default WhishList
