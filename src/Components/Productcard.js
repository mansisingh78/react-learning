
import { useEffect, useState } from "react";

import Product from "./Product";
const ProductCard = () => {
  //local state variable
    const [listOfProduct, setListOfProduct] = useState([]);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async ()=> {
      const data = await  fetch("https://fakestoreapi.com/products");
      const resData = await data.json();
      setListOfProduct(resData);

    }
  
    return (
        <div>
            <button onClick={()=>{
                const filteredProduct = listOfProduct.filter( Product => Product.rating.rate >= 4);
                setListOfProduct(filteredProduct);
                
            }} style={{"marginTop":"10px"}}>Top rated product</button>
            <div className="product_card">
       
       {listOfProduct.map((product) => {
         return <Product key={product.id} product={product} />;
       })}
     </div>
        </div>
     
    );
  };
  export default ProductCard;