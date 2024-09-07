import React, {useState} from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Sideb from "./Sidebar/Sideb";
import products from './DB/Data'
//import Card from "./Components/Card";

function App() {
  const [filter, setFilter] = useState("");
  const[selectedCategory, setSelectedCategory] = useState(null);

  const searchText = (event) =>{
    setFilter(event.target.value);
  }
  const dataSearch = products.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  }); 
 
  
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  } 

const handleClick = event => {
  setSelectedCategory(event.target.value)
}
function filteredData(products, selected, filter) {
  let filteredProducts = products
  if(filter) {
    filteredProducts = dataSearch;
  }
  if(selected){
    filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
    category === selected ||color === selected ||company === selected|| newPrice === selected || title === selected );
   }
   return filteredProducts
   ;
}

const result = filteredData(products, selectedCategory, filter)
 
 
  return (
    <>
    <Sideb handleChange={handleChange}/>
    <Nav filter={filter}  searchText={searchText}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    
    </>
  );
}

export default App;
