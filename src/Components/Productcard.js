
import { useState } from "react";
import {ProductList} from "../Utils/Constant";
import Product from "./Product";
const ProductCard = () => {
    const [listOfProduct, setListOfProduct] = useState(ProductList);
    // let listOfProduct = [
    //     {
    //         id: 1,
    //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //         price: 109.95,
    //         description:
    //           "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //         category: "men's clothing",
    //         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //         rating: {
    //           rate: 3.9,
    //           count: 120,
    //         },
    //       },
    // ];
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