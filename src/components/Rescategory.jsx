import React, { useState } from 'react'
import ResitemList from './ResitemList';

function Rescategory({ item,showItems ,setshowindex}) {

   // const [showitem,setshowitem] = useState(false);
    
    const [isopen,setisopen] = useState(true);
    const expandItem = ()=>{
        //setshowitem(!showitem);
        setisopen(!isopen);
       setshowindex();
    }

    return (
        <div className=' mx-auto  h-15 w-6/12  bg-slate-200 mt-6 z-auto  shadow-lg'>
            <div className='flex justify-between cursor-pointer on' onClick={()=>{
                expandItem();
            }}>
                <div>
                    <h1 className='font-semibold text-xl ml-2 mt-2 '> {item.title} ({item.itemCards.length})</h1>

                </div>
                <div className='' >
                    <h1 className='mr-2 mt-2'>🔽</h1>

                </div>

            </div>

            {
                isopen===false&& showItems && <ResitemList items={item.itemCards} /> 
            }

        </div>

    )
}

export default Rescategory;