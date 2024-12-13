"use client";
import React from "react";
import CartList from "./components/CartList";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-screen-xl py-4">
      <h2 className="text-xl font-medium">My Cart</h2>
      <div className="flex justify-between gap-4">
        <div className="h-fit w-3/4 bg-base-200 p-4">
          <CartList />
        </div>

        <div className="flex w-1/4 flex-col gap-4">
          <div className="flex flex-col gap-2 bg-base-200 p-4">
            <h3 className="text-lg font-medium">Coupon</h3>
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered h-10 min-h-10 w-full"
              />
              <button className="btn btn-accent h-10 min-h-10">Apply</button>
            </div>
          </div>
          <div className="space-y-4 bg-base-200 p-4">
            <h3 className="text-lg font-medium">Payment Summary</h3>
            <div className="space-y-2 divide-y divide-base-100 text-xs">
              <div className="flex justify-between pt-1">
                <div>Total</div>
                <div>600</div>
              </div>
              <div className="flex justify-between pt-1">
                <div>Discount</div>
                <div>600</div>
              </div>
              <div className="flex justify-between pt-1">
                <div>Coupon Discount</div>
                <div>600</div>
              </div>
              <div className="flex justify-between pt-1">
                <div>Delivery</div>
                <div>600</div>
              </div>
              <div className="flex justify-between pt-1 font-medium">
                <div>Grand Total</div>
                <div>600</div>
              </div>
            </div>
            <button
              className="btn btn-accent mt-4 h-10 min-h-10 w-full"
              onClick={() => router.push("/checkout")}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
