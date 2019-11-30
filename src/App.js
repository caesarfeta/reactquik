import './App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import {addToCart} from './actions';
function Product(p){
  const dispatch = useDispatch();
  return (
    <tr key={ p.itm.id }>
      <td>{ p.itm.name }</td>
      <td className={ p.itm.sale_price!=null?"strike":"" } >
      { p.itm.price }
      </td>
      <td>{ p.itm.sale_price }</td>
      <td>{ p.itm.max_quant }</td>
      <td>
        <button onClick={()=>dispatch(addToCart(p.itm))}>Buy</button>
      </td>
    </tr>
  )
}
function Cart(){
  const counter = useSelector(state=>state.counter)
  return <h1>Cart: {counter}</h1>
}
function ListProducts(){
  const products = useSelector(state=>state.products)
  var trs = _.map(products,function(itm,i){
    return <Product itm={itm} key={itm.id}/>
  })
  return <div>
    <h1>Products</h1>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th>Max Quantity</th>
        </tr>
    </thead>
    <tbody>{ trs }</tbody>
    </table>
  </div>
}
function AddProduct(){
  return <h1>AddProduct</h1>
}
function App() {
  return (
    <div className="App">
        <Cart />
        <ListProducts />
        <AddProduct />
    </div>
  );
}
export default App;