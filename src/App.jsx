import "./App.css";
import React, { useState } from "react";

const items = [
  {
    title: "Title 1",
    desc: "Here is desc 1. Here is desc 1. Here is desc 1. Here is desc 1. Here is desc 1. Here is desc 1. Here is desc 1.",
  },
  {
    title: "Title 2",
    desc: "Here is desc 2. Here is desc 2. Here is desc 2. Here is desc 2. Here is desc 2. Here is desc 2. Here is desc 2.",
  },
  {
    title: "Title 3",
    desc: "Here is desc 3. Here is desc 3. Here is desc 3. Here is desc 3. Here is desc 3. Here is desc 3. Here is desc 3.",
  },
];
function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const onClickEvent = (index) => {
    setIsExpanded(!isExpanded);
    setExpandedIndex(index);
  };
  return (
    <>
      <div className="flex w-full h-screen flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/2 min-w-[600px]">
          <div className="flex-col">
            {items.map((item, index) => {
              let currentBlock = isExpanded && expandedIndex == index;
              return (
                <div className="bg-gray-200 mb-5 rounded">
                  <div
                    onClick={() => onClickEvent(index)}
                    className={currentBlock ? "font-bold text-blue-500" : ""}
                  >
                    {item.title}
                  </div>
                  {currentBlock && <div>{item.desc}</div>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full sm:mb-5 md:w-1/2 md:mx-5 min-w-[600px]">
          <div
            className="relative group  cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://cdn.mos.cms.futurecdn.net/jRKoJn879Zt2EFPbWmRw6J-1200-80.jpg"
              width="100%"
              height="100%"
              className="absolute rounded inset-0 z-40 object-cover order-first group-hover:translate-x-1 group-hover:translate-y-1 "
            />
            <img
              src="https://cdn.mos.cms.futurecdn.net/jRKoJn879Zt2EFPbWmRw6J-1200-80.jpg"
              width="100%"
              height="100%"
              className={`absolute rounded object-cover z-30 transition-opacity duration-500 group-hover:opacity-60 ${
                isHovered ? "left-5 top-20 opacity-60 sepia" : "inset-0"
              }`}
            />
            <img
              src="https://cdn.mos.cms.futurecdn.net/jRKoJn879Zt2EFPbWmRw6J-1200-80.jpg"
              width="100%"
              height="100%"
              className={`absolute rounded object-cover z-0 transition-opacity duration-500 ${
                isHovered ? "left-10 top-40 opacity-30 grayscale" : "inset-0"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
