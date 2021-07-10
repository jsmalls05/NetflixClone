import "./navbar.scss"
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import {useState} from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled)
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://softwareengineeringdaily.com/wp-content/uploads/2018/09/netflix.jpg" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://images.hdqwalls.com/download/black-goku-dragon-ball-super-os-2048x1152.jpg" alt="" />
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                    
                </div>            
            </div>
        </div>
    )
}
