import React, { useState } from "react";

function OrderList() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cartItem")) || [])
  return (
    <div className="orderlist-con">
      <div className="orderlist">
        <ul>
      
        </ul>
        <section>
          <p>You have not placed any order.</p>
        </section>
      </div>
    </div>
  );
}

export default OrderList;
