import { FC } from "react";

import { Deal } from "../domain/deal";

export const DealCard: FC<Deal> = ({
  title,
  salePrice,
  normalPrice,
  dealRating,
  releaseDate,
  thumb,
}) => (
  <div className="border-2 rounded-md w-full h-full p-4 grid grid-cols-4 grid-rows-2">
    <div className="col-start-1 col-end-3">
      <div className="text-2xl">{title}</div>
      <div>
        <span>Release date: </span>
        <span>{releaseDate}</span>
      </div>
    </div>

    <div className="col-start-3 col-end-5">
      <img className="w-full h-full object-cover" src={thumb} alt="thumb" />
    </div>

    <div className="col-start-1 col-end-2">
      <div>
        <span>Price: </span>
        <span className="text-green-700">{salePrice}</span>
      </div>
      <div className="line-through text-red-700">
        <span>{normalPrice}</span>
      </div>
    </div>

    <div className="col-start-3 col-end-5">
      <span>Deal rating: </span>
      <span>{dealRating}</span>
    </div>
  </div>
);
