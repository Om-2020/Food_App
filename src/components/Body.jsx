import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {

    const [listofRestaurant, setlistofReataurant] = useState([]);

    const [filterdata, setfilterdata] = useState([]);
    const [text, settext] = useState("");

    const fetchdata = async () => {

        try {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.5940947&lng=85.1375645&carousel=true&third_party_vendor=1");
            const data2 = await data.json();
            //console.log(data2);
            const resdata = data2.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
            //console.log(resdata[0].info.name);
            //console.log(resdata);
            setlistofReataurant(resdata);
            setfilterdata(resdata);

        } catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus===false)
    {
        return <h1>
            Opps!!! You are Offline
        </h1>
    }

    const ClickHandler = () => {
        const searchtext = text.toLowerCase();
        const tempdata = listofRestaurant.filter((item) => {
            return item.info.name.toLowerCase().includes(searchtext);
        })
        setfilterdata(tempdata);
        //console.log(tempdata);

    }

    return listofRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search ml-6 p-3">
                <input className="border-2 border-rose-600 " type="text" value={text} onChange={(e) => {
                    settext(e.target.value)
                }} ></input>
                <button className="m-4 font-bold hover:bg-green-700" onClick={
                    ClickHandler
                }>🔍Search</button>
            </div>
            <div className="flex flex-wrap">


                {

                    filterdata.map((data) => {
                        return <Link to={"/restaurants/" + data.info.id} key={data.info.id}
                        >
                            <RestaurantCard
                                resname={data.info.name}
                                cuisine={data.info.cuisines}
                                rating={data.info.avgRating}
                                time={data.info.sla.deliveryTime}
                                cloudid={data.info.cloudinaryImageId}

                            />

                        </Link>
                    })

                }

            </div>
        </div>
    );
};

export default Body;