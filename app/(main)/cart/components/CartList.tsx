import React from "react";
import CartCard from "./CartCard";

const CartList = () => {
  return (
    <div className="space-y-4 divide-y divide-base-100">
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  );
};

export default CartList;
