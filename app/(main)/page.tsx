import React from "react";
import TopBanner from "./components/TopBanner";
import Sidebar from "./components/Sidebar";
import DailyDeals from "./components/DailyDeals";
import TrendingItems from "./components/TrendingItems";
import HotMenu from "./components/HotMenu";

const Home = () => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="mt-6 flex gap-4">
        <Sidebar />
        <div className="flex flex-col space-y-6">
          <TopBanner />
          <div>
            <div className="skeleton h-[100px] w-full rounded-none"></div>
          </div>
          <HotMenu />
          <DailyDeals />
          <div>
            <div className="skeleton h-[160px] w-full rounded-none"></div>
          </div>
          <TrendingItems />
        </div>
      </div>
    </section>
  );
};

export default Home;
