import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import ThemeController from "./ThemeController";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = ({ ...props }: HeaderProps) => {
  return (
    <header {...props} className="bg-primary text-primary-content">
      <div className="container flex items-center justify-between pt-2">
        <div>currency</div>
        <ThemeController />
      </div>

      <div className="container flex items-center gap-4">
        <div className="w-44 place-content-center">
          <a href="/">
            <img src="../assets/images/toypotlogo.png" alt="logo" />
          </a>
        </div>
        <div className="flex flex-1 justify-between">
          <nav className="w-full">
            <ul className="flex justify-start gap-10">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/hot">Best Selling</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="flex w-full items-center justify-end gap-2 text-xs">
            <div>
              <a href="/login">login or register</a>
            </div>
            <div>|</div>
            <div>
              <a href="/support">support</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center gap-4">
        <div className="w-44">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-accent h-auto min-h-0 w-full justify-between border-0 p-2"
            >
              <div>All Department</div>
              <div>
                <ChevronDownIcon className="size-4 stroke-2" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-44 rounded-btn bg-base-100 shadow-lg"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex w-[720px]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex w-32 items-center justify-between bg-base-300 p-2 text-xs text-base-content"
              >
                <div>All Categories</div>
                <div>
                  <ChevronDownIcon className="size-4 stroke-1" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="flex w-full">
              <input
                type="text"
                className="h-auto w-full bg-base-100 px-2 py-1 text-base-content outline-none placeholder:text-xs"
                placeholder="Enter your keyword..."
              />
              <button className="btn btn-accent h-auto min-h-0 w-20 rounded-none border-0 p-1">
                <MagnifyingGlassIcon className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex w-52 items-center justify-between gap-4 py-2 text-xs">
            <div className="flex items-center">
              <HeartIcon className="size-8 text-error" />
              <div className="font-semibold">6</div>
            </div>
            <a href="/cart">
              <div className="flex w-32 items-center justify-end gap-2">
                <div className="indicator">
                  <span className="badge indicator-item badge-error p-1 text-xs">
                    52
                  </span>
                  <ShoppingBagIcon className="size-8 rounded-full bg-accent p-1 text-accent-content" />
                </div>

                <div className="font-medium">MY CART</div>
                <div className="text-accent">$656</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
