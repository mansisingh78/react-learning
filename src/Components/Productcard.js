
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Product from "./Product";
const ProductCard = () => {
  //local state variable
    const [listOfProduct, setListOfProduct] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async ()=> {
      const data = await  fetch("https://fakestoreapi.com/products");
      const resData = await data.json();
      setListOfProduct(resData);

    }
    //conditional rendering
    if(listOfProduct.length === 0){
      return(
        <Skeleton/>
      )
    }
  console.log(searchText);
  
    return (
        <div>
          <div style={{marginTop: "10px"  }}>
            <input type="text" onChange ={(e)=>setSearchText(e.target.value)} value={searchText}/>
            <button onClick={()=>{
              const filteredData = listOfProduct.filter((product)=>{
                return product.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
              })
              setListOfProduct(filteredData);
              
            }}>Search</button>
          </div>
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