import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Products() {
    return (
        <div className='m-5'>
            <div className="row pt-5">
                {/* Duplicating columns acording to products  */}
                <div className="col-lg-3">
                    {/*cards*/}
                    <Card className='shadow'>
                        <Card.Img style={{height:"250px"}} variant="top" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" />
                        <Card.Body className='text-center'>
                            <Card.Title className='mb-3'>Mascara Lashes</Card.Title>
                            <Link to={`/products/:id`} className='btn btn-primary'>View More..</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Products
