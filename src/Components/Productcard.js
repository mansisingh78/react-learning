import {ProductList} from "../Utils/Constant";
import Product from "./Product";
const ProductCard = () => {
    return (
      <div className="product_card">
        {ProductList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  };
  export default ProductCard;