import React from "react";

const HotMenu = () => {
  return (
    <section className="flex w-full justify-between">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="skeleton h-14 w-14"></div>
          <div className="text-xs">Hot</div>
        </div>
      ))}
    </section>
  );
};

export default HotMenu;
