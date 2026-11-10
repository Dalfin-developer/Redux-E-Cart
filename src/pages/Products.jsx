import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/productSlice';
import cartStore from '../Redux/cartStore';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
function Products() {
    const {loading,allProducts,error} = useSelector(state=>state.productReducer)

     console.log("1. Products component loaded");

    const dispatch = useDispatch();
    
    //Pagination simple Logic
    const [currPage,setCurrPage]= useState(1)
    const productPerPage = 8
    const totalPages = Math.ceil(allProducts?.length/productPerPage)
    const currentPageLastIndex = currPage*productPerPage
    const currentPageFirstIndex =  currentPageLastIndex-productPerPage
    const visibleProductArray  = allProducts.slice(currentPageFirstIndex,currentPageLastIndex)

    useEffect(() => {

        console.log("2. useEffect executed");

        dispatch(getAllProducts());

        console.log("3. getAllProducts dispatched");

    }, []);
    const navigateNextpage = ()=>{
        currPage !=totalPages && setCurrPage(currPage+1)
    }
    const navigatePrevPage = ()=>{
        currPage !=1 && setCurrPage(currPage-1)
    }

    return (
        <>
        <Header insideProduct/>
            <div className='m-5'>
                {
                    loading ? 
                    <div className='text-center py-5 fw-bolder'>Loading...</div>:
                    <div className="row pt-5 g-4">
                    {/* Duplicating columns acording to products  */}
                    {
                        visibleProductArray.length>0?
                        visibleProductArray.map(product=>(<div key={product.title} className="col-lg-3 ">
                        {/*cards*/}
                        <Card className='shadow'>
                            <Card.Img style={{height:"250px"}} variant="top" src={product?.thumbnail} />
                            <Card.Body className='text-center'>
                                <Card.Title className='mb-3'>{product?.title}</Card.Title>
                                <Link to={`/products/${product.id}`} className='btn btn-primary'>View More..</Link>
                            </Card.Body>
                        </Card>
                    </div>)):
                    <div className='fw-bolder'>No Products Found</div>
                    }
                    </div>
                }
                <div className='text-center fw-bold my-5 fs-5 text-primary'>
                    <button className="btn bg-primary text-light" onClick={navigatePrevPage}><FontAwesomeIcon icon={faBackward} /> </button>
                    {currPage} of {totalPages}
                    <button className="btn bg-primary text-light"  onClick={navigateNextpage}><FontAwesomeIcon icon={faForward} /></button>

                </div>
            </div>
        </>
    )
}

export default Products
