import { useState } from "react";
const Navbar = () => {
  // let btnName = "Light";//normal js variable
  const[btnName,setBtnName] = useState("Light");
    return (
      <div className="navbar" >
        <h1>LOGO</h1>
        <ul className="menu_items">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>CART</li>
          <button onClick={()=>{
           setBtnName("Dark");
          }}>{btnName}</button>
        </ul>
        
      </div>
    );
  };
  export default Navbar;