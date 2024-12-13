import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[198px] max-w-[198px] overflow-hidden">
        {/* <img src="" alt="product image" /> */}

        <img src="../assets/images/banner04.jpg" alt="banner04" />
      </div>
      <div className="flex flex-col">
        <div className="line-clamp-2 text-xs font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          libero.
        </div>
        <div className="text-xs text-primary">Oct. 27 2024</div>
      </div>
    </div>
  );
};

export default BlogCard;
