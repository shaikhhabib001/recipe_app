import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="flex flex-col w-80 bg-white/75 shadow-xl gap-5 border-2 border-white rounded-2xl">
      {/* img start*/}
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img className="block w-full" src={data.image_url} alt="" />
      </div>
      {/* img end*/}
      {/* content start*/}

      <div className="p-2">
        <span className="text-sm font-medium text-cyan-700">
          {data.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">{data.title}</h3>
        <Link className="text-lg cursor-pointer" to={`/details/${data.id}`}>
          Recipe Details
        </Link>
      </div>
      {/* content end*/}
    </div>
  );
}

export default Card;
