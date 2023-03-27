import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { add } from "../store/cartSlice"; 
function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  },[]);
  const dispatch = useDispatch();

  const handleAdd = (product)=>{
dispatch(add(product))
  }
  return <div className="productsWrapper">
    {product.map(product =>(
        <div className="card" key={product.id}>
            <img src={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=>handleAdd(product)} className="btn">Add to cart</button>
        </div>
    ))}
  </div>;
}

export default Products;
