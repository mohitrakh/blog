import React from "react";

const Card = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="">
        <img
          className="rounded-lg max-w-60"
          src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds"
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className="font-bold text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, qui.
        </h2>
        <p className="flex gap-3">
          <a href="#" className="font-bold text-gray-700">
            My name
          </a>
          <time className="text-gray-700">2021-01-06 15;:34</time>
        </p>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          deleniti optio quis pariatur mollitia, veniam id quod eveniet placeat
          necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default Card;
