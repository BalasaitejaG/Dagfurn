import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";

function exploreMenu({category, setCategory}) {
  return (
    <div className="ExploreMenu" id="ExploreMenu">
      <h1>Explore our Menu</h1>
      <p className="ExploreMenu-text">
        choose from a variety of options from our menu and enjoy the delicious
        food at your doorstep.Our mission is to provide the best food experience
        to our customers.
      </p>
      <div className="ExploreMenu-list">
        {menu_list.map((item,index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="ExploreMenu-list-item" >
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default exploreMenu;
