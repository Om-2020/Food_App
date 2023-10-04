import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constant";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Header = () => {

    const OnlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between h-25 w-auto z-10 shadow-lg bg-pink-100">
            <div >
                <img className=" m-5 w-20 h-20 rounded-full " src={LOGO_URL}></img>
            </div>

            <div className="flex p-8 m-5 space-x-7 ">
                    <Link>Online Status: {OnlineStatus?"🟢": "🔴"}</Link>
                    <Link to="/">🏡Home</Link>
                    <Link to="/about" >👩‍👩‍👦About us</Link>
                    <Link to="/contact">📞Contact us</Link>
                    <Link to="/cart">🛒Cart</Link>
            
            </div>
        </div>
    );
};

export default Header;