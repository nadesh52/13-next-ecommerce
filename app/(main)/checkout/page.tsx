"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CheckoutPage = () => {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-screen-xl py-4">
      <div className="flex justify-between gap-4">
        <div className="h-fit w-4/6">
          <div className="bg-base-200 p-4">
            <h2 className="text-3xl font-medium">Address</h2>
            <div className="mt-10">
              <h4 className="mb-2 font-medium">Delivery Address</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <label>
                    <p>first name</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                  <label>
                    <p>last name</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>street address</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10 w-[400px]"
                    />
                  </label>
                </div>

                <div className="flex gap-4">
                  <label>
                    <p>city</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                  <label>
                    <p>zipcode</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10 w-32"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>country</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>phone number</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div>
              <h4 className="mb-2 font-medium">Billing Address</h4>
              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="checkbox size-4 rounded" />
                  <p>Use delivery address as billing address</p>
                </label>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex gap-4">
                  <label>
                    <p>first name</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                  <label>
                    <p>last name</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>street address</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10 w-[400px]"
                    />
                  </label>
                </div>

                <div className="flex gap-4">
                  <label>
                    <p>city</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                  <label>
                    <p>zipcode</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10 w-32"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>country</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>phone number</p>
                    <input
                      type="text"
                      className="input input-bordered h-10 min-h-10"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/6 space-y-4">
          <div className="bg-base-200 p-4">
            <h2 className="text-xl font-medium">Payment Method</h2>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <div>
                <label>
                  <input name="radio" type="radio" className="peer sr-only" />
                  <div className="btn flex h-[66px] min-h-[66px] w-[68px] items-center justify-center rounded-md bg-white p-2 peer-checked:ring-2 peer-checked:ring-inset peer-checked:ring-accent">
                    <img
                      src="./assets/icons/payments/GooglePay.png"
                      alt="payment-icon"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <input name="radio" type="radio" className="peer sr-only" />
                  <div className="btn flex h-[66px] min-h-[66px] w-[68px] items-center justify-center rounded-md bg-white p-2 peer-checked:ring-2 peer-checked:ring-inset peer-checked:ring-accent">
                    <img
                      src="./assets/icons/payments/Mastercard.png"
                      alt="payment-icon"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <input name="radio" type="radio" className="peer sr-only" />
                  <div className="btn flex h-[66px] min-h-[66px] w-[68px] items-center justify-center rounded-md bg-white p-2 peer-checked:ring-2 peer-checked:ring-inset peer-checked:ring-accent">
                    <img
                      src="./assets/icons/payments/PayPal.png"
                      alt="payment-icon"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <input name="radio" type="radio" className="peer sr-only" />
                  <div className="btn flex h-[66px] min-h-[66px] w-[68px] items-center justify-center rounded-md bg-white p-2 peer-checked:ring-2 peer-checked:ring-inset peer-checked:ring-accent">
                    <img
                      src="./assets/icons/payments/UnionPay.png"
                      alt="payment-icon"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label>
                  <input name="radio" type="radio" className="peer sr-only" />
                  <div className="btn flex h-[66px] min-h-[66px] w-[68px] items-center justify-center rounded-md bg-white p-2 peer-checked:ring-2 peer-checked:ring-inset peer-checked:ring-accent">
                    <img
                      src="./assets/icons/payments/visa-logo.png"
                      alt="payment-icon"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <button
              className="btn btn-outline btn-error h-10 min-h-10"
              onClick={() => router.push("/cart")}
            >
              Back to Cart
            </button>
            <button className="w-f btn btn-accent h-10 min-h-10">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
