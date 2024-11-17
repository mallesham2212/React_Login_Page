import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <div className="flex justify-between p-5">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <ul className="flex justify-between space-x-4 ">

                 <Link to={"/login"}>   <li className="cursor-pointer">Home</li></Link>
                 <Link to={"/login"}>   <li className="cursor-pointer">About</li></Link>
                 <Link to={"/login"}>   <li className="cursor-pointer">Contact</li></Link>
                 <Link to={"/login"}>   <li className="cursor-pointer">Careers</li></Link>
                
                </ul>
            </div>

            <div>
                
                <Link to={"/"}>Logout
                </Link>
            </div>
        </div>
    );
}

export default Header;