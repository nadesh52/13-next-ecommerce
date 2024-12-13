import React from "react";

const TrendingItemsCard = ({ product }: any) => {
  return (
    <div className="flex w-[18%] flex-col items-center rounded-box bg-base-200 p-2">
      <div className="h-[170px] w-[170px] overflow-hidden rounded-box">
        {/* <img src={product.images[0]} alt="pro" /> */}
        
<img src="../assets/images/cardholder.jpg" alt="cardholder" />
      </div>
      <div className="font-medium text-accent">$ {product.price}</div>
      <div className="text-center text-xs font-medium">{product.title}</div>
    </div>
  );
};

export default TrendingItemsCard;
