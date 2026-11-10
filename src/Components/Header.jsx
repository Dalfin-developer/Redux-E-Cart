import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Redux/Slices/productSlice';



function Header({insideProduct}) {
  const dispatch = useDispatch()
  const userWishList = useSelector(state => state.wishlistReducer)

  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-light text-decoration-none fw-bold fs-4'><FontAwesomeIcon icon={faTruckFast} className='me-1'/>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideProduct && <Nav.Item>
              <input onChange={(e)=>dispatch(searchProduct(e.target.value))} type="text"  placeholder='Search Your Products' className='form-control'/>
            </Nav.Item> }   
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-4 mt-2'>
              <FontAwesomeIcon icon={faHeart} className='btn btn-danger mx-1 ' style={{fontSize:'10px'}} />Wishlist
              <Badge pill bg="secondary" className='ms-1'>{userWishList.length}</Badge>
            </Link>  
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-4 mt-2'>
              <FontAwesomeIcon icon={faCartPlus} className='btn btn-success ' style={{fontSize:'10px'}} /> Cart
              <Badge pill bg="secondary" className='ms-1'>0</Badge>
            </Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
