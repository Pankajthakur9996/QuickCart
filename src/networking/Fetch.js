const Fetch = async (skip,limit) => {
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  const data = await res.json();
  // console.log(data.products);
  return data.products;
};

export default Fetch;
