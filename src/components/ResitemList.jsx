import React from 'react';
import { CDN_URL } from '../utilis/constant.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../utilis/cartSlice';


function ResitemList({ items }) {

  const dispatch = useDispatch();

  // subscribing the store using  selector
  const cart = useSelector((store)=> store.cart.items);
  //console.log(cart);

  const cartHandler = (item) => {
    dispatch(addItems(item));
  }

  return (
    <div>
      {
        items.map((item) => {
          return <div key={item.card.info.id}
            className='p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between'>

            <div className='w-9/12'>
              <div className='font-m py-1'>
                <span className='font-medium'>{item.card.info.name}-</span>
                <span className='ml-1 font-medium'>₹{item.card.info.price / 100}</span>

              </div>
              <p className='text-xs'>{item.card.info.description}</p>

            </div>

            <div className='w-3/12 p-4'>
              <button className='p-2 bg-white shadow-lg absolute m-auto text-green-500 ' onClick={()=>
                cartHandler(item)}>Add</button>

              <img className="object-cover" src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>

        })
      }
    </div>
  )
}

export default ResitemList;