import React from "react";
import Countdown from "./Countdown";

const DailyDealsCard = ({ product }: any) => {
  return (
    <div className="flex gap-4 rounded-box p-2">
      <div className="w-[207px] max-w-[207px] overflow-hidden rounded-box">
        {/* <img src={product.images[0]} alt="product image" /> */}

        <img src="../assets/images/cardholder.jpg" alt="cardholder" />
      </div>

      <div className="flex w-[280px] flex-col">
        <div className="line-clamp-1 font-medium">{product.title}</div>
        <div className="text-xl font-medium text-accent">$ {product.price}</div>
        <div className="line-clamp-2 text-xs">{product.description}</div>

        <div className="mt-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center">
              <div>Available:</div>
              <div className="text-accent">8</div>
            </div>
            <div className="flex items-center">
              <div>Sold:</div>
              <div className="text-accent">12</div>
            </div>
          </div>
          <progress
            className="progress progress-accent w-full"
            value="8"
            max="20"
          ></progress>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium tracking-tighter text-warning">
              HURRY UP!
            </div>
            <div className="text-xs">offer end in</div>
          </div>

          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default DailyDealsCard;
