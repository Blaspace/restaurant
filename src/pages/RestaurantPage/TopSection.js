import React from "react";
import {CiSearch} from 'react-icons/ci'

function TopSection({restaurant}) {
  return (
    <div className="top-con">
      <div className="top">
        <p>
          <b>All offers from {restaurant[0].name} {restaurant[0].state}</b>
        </p>
        <form>
          <CiSearch size={25}/>
          <input placeholder="Search for you order..."/>
        </form>
      </div>
    </div>
  );
}

export default TopSection;
