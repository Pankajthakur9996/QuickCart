import { addcart, removeCart } from "../redux/cartslice";
import { useSelector, useDispatch } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";

export const ProductCard = ({ item }) => {
  if (!item || !item.title) return null;

  const cartItem = useSelector((state) => state.cartData.cartitem);
  const dispatch = useDispatch();

  const isInCart = (id) => {
    return cartItem.some((product) => product.id === id);
  };

  return (
    <Col md={4} className="fade-in mb-4">
      <Card className="h-100">
        <Card.Img
          loading="lazy"
          className="img1"
          variant="top"
          src={item.thumbnail}
          alt="not found"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }} className="twoLine">
            {item.title} | {item.description}
          </Card.Title>

          <div className="text1">
            <Card.Text>
              <span>⭐ {item.rating}</span>
            </Card.Text>
          </div>

          <Card.Text className="m-0">
            <strong className="price">${item.price}</strong>{" "}
            <strike>
              $
              {(
                item.price /
                (1 - item.discountPercentage / 100)
              ).toFixed(2)}
            </strike>{" "}
            <strong className="discount">
              ({item.discountPercentage}% off)
            </strong>
          </Card.Text>
          <br />
          <Card.Text className="ship m-0">
            FREE {item.shippingInformation}
          </Card.Text>
        </Card.Body>

        {isInCart(item.id) ? (
          <Button
            onClick={() => dispatch(removeCart(item.id))}
            className="remove-button mx-4 mb-4"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(addcart(item.id))}
            className="add-button mx-4 mb-4"
          >
            Add to Cart
          </Button>
        )}
      </Card>
    </Col>
  );
};
