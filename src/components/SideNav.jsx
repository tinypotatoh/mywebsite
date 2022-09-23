import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import "./SideNav.css";
import { MouseContext } from "./MouseContext";

export default function SideNav(){
  const { cursorChangeHandler } = useContext(MouseContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return(
  <>
    <IconContext.Provider value={{ color: "black" }}>
      <div className="navbar">
        <div
        onMouseEnter = {() => cursorChangeHandler("hovered")}
        onMouseLeave = {() => cursorChangeHandler("")}>

          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
        </div>
      </div>
    
      <div
            onMouseEnter = {() => cursorChangeHandler("hovered")}
            onMouseLeave = {() => cursorChangeHandler("")}>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose value={{ color: "white" }} />
                </Link>
            </li>

            {SideNavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      </IconContext.Provider>
    
  </>
);
}
