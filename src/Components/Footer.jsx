import React from 'react'
import { FaInstagram, FaPhone } from 'react-icons/fa'
import { FaArrowRight, FaFacebook, FaTruckFast, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-primary text-light pt-5 pb-3'>
      <div className="container">
        <div className="row pb-4">
          
          {/* Brand Info */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h4 className='fw-semibold'><FaTruckFast className="me-2"/>DailyCart</h4>
            <p className="mb-2">Designed and built with all the love in the world by the Luminar team with <br/> the help of our contributors.</p>
            <p className="mb-2">Code licensed Luminar, docs CC BY 3.0.</p>
            <p className="mb-0">Currently v5.3.2.</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0 d-flex flex-column gap-2">
            <h5 className='fw-semibold'>Links</h5>
            <Link to="/" className='text-light text-decoration-none'>Home</Link>
            <Link to="/wishlist" className='text-light text-decoration-none'>WishList</Link>
            <Link to="/cart" className='text-light text-decoration-none'>Cart</Link>
          </div>

          {/* Guides */}
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0 d-flex flex-column gap-2">
            <h5 className='fw-semibold'>Guides</h5>
            <Link to="/" className='text-light text-decoration-none'>React</Link>
            <Link to="/" className='text-light text-decoration-none'>React Bootstrap</Link>
            <Link to="/" className='text-light text-decoration-none'>React Router</Link>
          </div>

          {/* Contact & Newsletter */}
          <div className="col-lg-2 col-md-4">
            <h5 className='fw-semibold'>Contact Us</h5>
            <div className='d-flex align-items-center mt-2'>
              <input type="text" placeholder='Email here' className='form-control'/>
              <FaArrowRight className='ms-2 fs-4 flex-shrink-0' style={{cursor: 'pointer'}}/>
            </div>
            <div className='mt-3 d-flex flex-row gap-3 fs-5'>
              <FaFacebook style={{cursor: 'pointer'}}/>
              <FaTwitter style={{cursor: 'pointer'}}/>
              <FaInstagram style={{cursor: 'pointer'}}/>
              <FaWhatsapp style={{cursor: 'pointer'}}/>
              <MdEmail style={{cursor: 'pointer'}}/>
              <FaPhone style={{cursor: 'pointer'}}/>
            </div>
          </div>

        </div>

        <hr className="border-light opacity-50 my-3" />
        
        <p className='fw-semibold text-light text-center mb-0 py-2'>Copyright &copy; Luminar MearnStack July 2026 Batch</p>
      </div>
    </div>
  ) 
}

export default Footer