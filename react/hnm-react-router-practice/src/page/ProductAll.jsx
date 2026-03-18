import { useEffect } from "react";

const ProductAll = () => {
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>전체상품 페이지</div>;
};

export default ProductAll;
