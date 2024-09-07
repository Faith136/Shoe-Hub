import React from 'react'

function Button({onClick, value, title}) {
  return (
    <div>
      <button className='border border-gray-500 rounded-sm text-sm p-1 mr-1 cursor-pointer'
       onClick={onClick} value={value}>{title}</button>
    </div>
  )
}

export default Button




/*import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended"
import Sideb from "./Sidebar/Sideb";
import products from "./DB/Data";
import Card from "./Components/Card";

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
  const[query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => 
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1));

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  } 

const handleClick = event => {
  setSelectedCategory(event.target.value)
}

function filteredData(products, selected, query) {
  let filteredProducts = products
  if(query) {
    filteredProducts = filteredItems;
  }
  if(selected){
    filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
    category === selected ||color === selected ||company === selected|| newPrice === selected || title === selected );
   }
   return filteredProducts.map(({img, title, star, prevPrice, newPrice}) => (
    <Card key={Math.random()}
    img={img}
    title={title}
    star={star}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />
   ));
}

const result = filteredData(products, selectedCategory, query)
  return (
    <>
    <Sideb handleChange={handleChange}/>
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products query={query} result={result}/>
    
    </>
  );
}

export default App;*/
