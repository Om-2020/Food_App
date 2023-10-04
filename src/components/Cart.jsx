import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ResitemList from './ResitemList';

function Cart() {

  const cart = useSelector((store)=>store.cart.items)
  return (
   <ResitemList items={cart}/>
   
  )
}

export default Cart;