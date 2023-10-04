import { CDN_URL } from "../utilis/constant";

const RestaurantCard = (props) => {
    return (
        <div className="m-4 p-4 w-[350px] hover:w-[330px] "
            style={{backgroundColor:"#f0f0f0"}}
        >
            <img className="h-50 w-50 bg-center rounded-lg"  alt="res-logo" src={CDN_URL+props.cloudid}></img>
            <h3 className="font-bold py-4 text-lg">{props.resname}</h3>
            <h4>{props.cuisine.join(",")}</h4>
            <h4>Avg Rating: {props.rating}</h4>
            <h4> Delivery Time: {props.time}</h4>
        </div>
    );
};

export default RestaurantCard;