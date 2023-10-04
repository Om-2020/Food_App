import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utilis/useResmenu";
import Rescategory from "./Rescategory";

function RestaurantMenu() {

  const [showindex,setshowindex] = useState(null);

  const { resid } = useParams();

  const resdata = useResmenu(resid);

  if (resdata.length === 0) {
    return <Shimmer></Shimmer>;
  }

  const categories =
    resdata?.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  //console.log(categories);
  return (
    <div>

      <div className="flex  mt-10  justify-center ">

        <div className>
          <h1 className="text-2xl font-bold mb-2">
            {resdata.data.cards[0].card.card.info.name}
          </h1>
          <h3>{resdata.data.cards[0].card.card.info.cuisines.join(",")}</h3>
          <h3>
            {resdata.data.cards[0].card.card.info.areaName},
            {resdata.data.cards[0].card.card.info.sla.lastMileTravel} Km
          </h3>
        </div>

        <div className="h-[110px] w-[90px] bg-slate-300 rounded-md z-10 shadow-md ml-[450px]">
          <h1 className="mt-2 ml-1">
            ⭐{resdata.data.cards[0].card.card.info.avgRating}
          </h1>
          <h2 className="mt-6 ml-1">
            {resdata.data.cards[0].card.card.info.totalRatingsString}
          </h2>
        </div>
      </div>

        {
          categories.map((item,index)=>{
            return <Rescategory 
            item={item?.card?.card} 
            key={index} 
            showItems = {index===showindex?true:false}
            setshowindex = {()=>setshowindex(index)}
            />
            
          })
        }
          

    </div>
  );
}

export default RestaurantMenu;
