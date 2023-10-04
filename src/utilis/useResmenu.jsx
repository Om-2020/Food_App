
import React, { useEffect, useState } from 'react';
import { MENU_API } from './constant';


function useResmenu(resid) {

        const [resinfo,setresinfo] = useState([]);

    const fetchdata = async ()=>{
        try {
            const fetchdata = await fetch(MENU_API + resid);
            const data = await fetchdata.json();
            //console.log(data);
            setresinfo(data);

            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchdata();
    },[])

    return resinfo;
}

export default useResmenu;