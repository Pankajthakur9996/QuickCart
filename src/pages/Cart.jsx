import { useSelector } from "react-redux";
import { Container,Row,Col,Card,Button } from "react-bootstrap";
import { ClipLoader } from 'react-spinners';
import { Cartitem } from "../components/Cartitem";
import { useEffect, useState } from "react";
 
export const Cart=()=>
{
    const cart = useSelector(state => state.cartData?.cartitem || []);
    console.log(cart);

    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(true);
     console.log(cart);
    useEffect(()=>{
        if(cart.length===0)
        {
            setProduct([]);
            setLoading(false);
            return;
        }
        setLoading(true);
       
        Promise.all(
            cart.map((item)=>fetch(`https://dummyjson.com/products/${item}`).then((res) =>
          res.json()
        )
        )
    ) .then((data) => {
        console.log("Fetched Product Data:", data);
        setProduct(data);
        
        setLoading(false);
      })
      .catch(() => setLoading(false));
    },[cart])
    console.log(product);
  const subtotal = product.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    return(<>
    <Container fluid className="p-4" style={{ background: '#f5f5f5' }}>
    <h3>Shopping Cart</h3>
     {cart.length > 0 ? <Row className="mt-4" style={{ minHeight: '85vh' }}>
        <Col md={8}>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <ClipLoader color="gold" size={150} />
              </div>
            ) :(<div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                { product.map((item)=>
                < Cartitem item={item}/>)}
            </div> )}
            </Col>
            <Col md={4}>
            <Card className="shadow-sm">
            <Card.Body>
                 Subtotal ({product.length} items):{' '}
                  <span className="text-success">${subtotal}</span>
                  <Button variant="warning" className="w-100 mt-3">
                  Proceed to Checkout
                </Button>
            </Card.Body>
              </Card>
            </Col>
            
     </Row> :<div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} className='mt-4'><h4>Cart is empty</h4></div>}
    
    </Container>
    </>)
}