import { useEffect, useState } from "react";
import Fetch from "../networking/Fetch";
import { ProductCard } from "../components/ProductCard";
import { Row, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/productslice";
import './index.css';

export const Productlist = () => {
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const productData = useSelector((state) => state.product.data);
  const dispatch = useDispatch();

  const FetchApi = async () => {
    try {
      const result = await Fetch(skip);
      console.log("Fetched:", result);

      setLoading(false);
      dispatch(addProduct(result));
      setSkip((s) => s + 10);

      if (skip + 10 >= result.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (productData.length === 0) {
        await FetchApi();
        setLoading(false);
      } else {
        setSkip(productData.length);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {console.log(productData.length)}
    <Container fluid className="mt-4">
      {loading ? (
        <div className="spinner">
          <ClipLoader color="gold" size={150} />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={productData.length}
          next={FetchApi}
          hasMore={hasMore}
          loader={
            <div className="spinner-lower">
              <ClipLoader color="gold" />
            </div>
          }
          >
          <Row>
            {productData.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </Container>
    </>
  );
};
