import React from "react";

const TopBanner = () => {
  return (
    <section className="flex w-full gap-6">
      <div>
        <img
          src="../assets/images/banner02.jpg"
          alt="banner01"
          className="h-[400px] w-[720px]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <img
            src="../assets/images/banner01.jpg"
            alt="banner01"
            className="h-[186px] w-[317px]"
          />
        </div>
        <div>
          <img
            src="../assets/images/banner03.jpg"
            alt="banner01"
            className="h-[186px] w-[317px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
