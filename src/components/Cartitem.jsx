import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiTrash } from 'react-icons/fi';
import { Card,Button } from "react-bootstrap";
import { removeCart } from "../redux/cartslice";
export const Cartitem=({item})=>
{
const dispatch=useDispatch();
const handleRemove=(id)=>
{
    dispatch(removeCart(id))

}
return(
    <>
   <Card key={item.id} className="mb-3">
    
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <Link to={`/product-details/${item.id}`}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                style={{ width: '125px', height: '125px', objectFit: 'cover', marginRight: '15px' }}
                            />
                            </Link>
                          
                            <div>
                                  
                                <h5>{item.title}</h5>
                                <p className="mb-1 text-muted">{item.brand}</p>
                                <div className='d-flex'>
                                    <p className="mb-1 text-danger fw-semibold">${item.price.toFixed(2)}</p>
                                    <span className="badge bg-warning text-dark p-2 ms-2">
                                        {item.discountPercentage.toFixed(2)}% OFF
                                    </span>
                                </div>
                                <p className="mt-1 text-muted">In Stock</p>
                            </div>
                        </div>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                handleRemove(item.id);
                                e.preventDefault();
                            }}
                            className="p-2 d-flex align-items-center justify-content-center"
                            style={{
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                backgroundColor: '#f8f9fa',
                                width: '38px',
                                height: '38px',
                            }}
                        >
                            <FiTrash color="red" />
                        </Button>
                    </Card.Body>
                </Card>
    

    </>
)
}