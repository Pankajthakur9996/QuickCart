import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBullhorn, FaStar } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { Container, Carousel, ListGroup, Row, Col, Badge, Button, Card } from 'react-bootstrap';

import { MdClear } from "react-icons/md";
import { use } from 'react';
export  const Productdetail=()=>
{
   const{id}=useParams();
   const[loading,setLoading]=useState(true);
   const[product,setProduct]=useState(null);
   useEffect(()=>{
      fetch(`https://dummyjson.com/products/${id}`)
      .then(response=>response.json())
      .then(data=>{
         setProduct(data);
         setLoading(false);
      })


   },[id])
   return(
      <>
      <Container className='mt-4'>
         {
            loading?(<div className='d-flex justify-content-center aligns-items-center'style={{ height: '60vh' }}>
               <ClipLoader color='gold' size={150}/>
            </div>):(
               <Row className='g-4 px-4'>
                  <Col md={6}>
                  <Card className='h-100 shadow-sm'>
                     <Carousel variant='dark' indicators={product.images.length>1} controls={product.images.length>1}>
                        {
                           product.images.map((item,index)=>(
                              <Carousel.Item key={index}>
                                 <img src={item} alt={`Product:${index}`} className="d-block w-100" loading='lazy' style={{ height: '550px', objectFit: 'contain'} }/>


                              </Carousel.Item>

                           ))
                        }
                     </Carousel>

                  </Card>
                  </Col>
                  <Col md={6}>
                  <h2>{product.title}</h2>
                  <h5 className='text-muted'>{product.brand}</h5>
                  <div className='d-flex mb-3 gap-2'>
                     <Badge bg="success">{product.availabilityStatus}</Badge>
                     <Badge bg="info" text="dark">{product.category}</Badge>
                  </div>
                  <p className="text-secondary">{product.description}</p>
                  <h3 className="text-primary">
                ${product.price.toFixed(2)}{' '}
                <span className="text-decoration-line-through fs-6 text-muted">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>{' '}
                <Badge bg="danger">{product.discountPercentage}% OFF</Badge>
              </h3>
              <ListGroup className="bg-light p-3 rounded">
                <ListGroup.Item><strong>Rating:</strong> <FaStar color="gold" /> {product.rating}</ListGroup.Item>
                <ListGroup.Item><strong>Stock:</strong> {product.stock} items</ListGroup.Item>
                <ListGroup.Item><strong>Dimensions:</strong> {product.dimensions.width}W <MdClear /> {product.dimensions.height}H <MdClear /> {product.dimensions.depth}D</ListGroup.Item>
                <ListGroup.Item><strong>Weight:</strong> {product.weight} kg</ListGroup.Item>
                <ListGroup.Item><strong>Shipping:</strong> {product.shippingInformation}</ListGroup.Item>
                <ListGroup.Item><strong>Warranty:</strong> {product.warrantyInformation}</ListGroup.Item>
                <ListGroup.Item><strong>Return Policy:</strong> {product.returnPolicy}</ListGroup.Item>
                <ListGroup.Item><strong>SKU:</strong> {product.sku}</ListGroup.Item>
                <ListGroup.Item><strong>Tags:</strong>{' '}
                  {product.tags.map(tag => (
                    <Badge key={tag} bg="secondary" className="me-1">{tag}</Badge>
                  ))}
                </ListGroup.Item>
              </ListGroup>

                  </Col>
                  <Col md={12} className="mt-5">
              <h4><FaBullhorn /> Customer Reviews</h4>
              {product.reviews.map((review, i) => (
                <Card key={i} className="mt-3 bg-light">
                  <Card.Body>
                    <div className="d-flex justify-content-between flex-wrap">
                      <p className="mb-1">
                        <FaStar color="gold" /> {review.rating} - <strong>{review.reviewerName}</strong>
                      </p>
                      <p className="text-muted small mb-1">
                        {review.date} | {review.reviewerEmail}
                      </p>
                    </div>
                    <Card.Text className="mt-2">{review.comment}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>

               </Row>
            )
         }
      </Container>
      </>
   )




}
