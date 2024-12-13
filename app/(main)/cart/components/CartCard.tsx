'use client'
import React from "react";

const CartCard = () => {
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16"></div>
        <div className="flex flex-col">
          <div className="text-lg font-medium">name</div>
          <div>seller</div>
        </div>
      </div>
      <div className="join gap-1">
        <button className="btn rounded-none">-</button>
        <input
          type="text"
          placeholder="1"
          className="input w-full max-w-14 rounded-none text-center"
        />
        <button className="btn rounded-none">+</button>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-lg font-medium">300</div>
        <div className="text-error">if discount</div>
      </div>
    </div>
  );
};

export default CartCard;
