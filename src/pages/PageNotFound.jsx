import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
function PageNotFound() {
  return (
    <>
    <Header/>
      <div>
        <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img style={{width:"1000px", height:"400px"}} src="/Gemini_Generated_Image_m8ys3ym8ys3ym8ys.png" alt="page not found" />
        <h2 className='my-4'>We Are Sorry ,Look Like You Are Lost</h2>
        <Link to='/' className='btn btn-dark'>Back To Home</Link>
      </div>
      </div>
    </>
   
  )
}

export default PageNotFound
