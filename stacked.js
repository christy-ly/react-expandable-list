import React, { useState } from "react";

const StackedImages = () => {
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    {
      src: "https://via.placeholder.com/300x400?text=Image+1",
      alt: "Image 1",
    },
    {
      src: "https://via.placeholder.com/300x400?text=Image+2",
      alt: "Image 2",
    },
    {
      src: "https://via.placeholder.com/300x400?text=Image+3",
      alt: "Image 3",
    },
  ];

  return (
    <div
      className="relative w-[300px] h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Layers */}
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? `opacity-0 delay-[${index * 100}ms]` : "opacity-100"
          }`}
        />
      ))}

      {/* Optional Overlay Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        Hovered!
      </div>
    </div>
  );
};

export default StackedImages;
