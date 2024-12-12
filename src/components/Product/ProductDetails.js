import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { useParams } from "react-router-dom";
import RelatedProduct from "../Product/RelatedProduct";  // Import the RelatedProduct component

const ProductDetails = () => {
  const { products } = useContext(AppContext);  // Get products from context
  const { productId } = useParams();  // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find(p => p._id === productId);
    setProduct(currentProduct);
  }, [productId, products]);

  if (!product) return <p>Loading...</p>;  // Loading state if the product isn't found yet

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imgSrc} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price} ₹</p>
      
      {/* Display Related Products based on the category */}
      <RelatedProduct category={product.category} />
    </div>
  );
};

export default ProductDetails;
