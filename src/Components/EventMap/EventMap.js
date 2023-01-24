import React from "react";
import "./EventMap.css";

const EventMap = ({ infoToData, handleDetailId }) => {
  const { ID, location, data, time } = infoToData;

  return (
    <div
      id={ID}
      onClick={handleDetailId}
      className="cursor-pointer shadow-xl bg-base-200 mt-2 mb-1 card-bg"
    >
      <div id={ID} className="p-2">
        <div id={ID} className="flex justify-between">
          <div id={ID} className="flex">
            <p id={ID} className="mr-1">
              {ID} :
            </p>
            <p id={ID} className="">
              {location}
            </p>
          </div>

          <div id={ID}>
            <span id={ID} className="mr-5">
              {data}
            </span>
            <span id={ID}>{time}</span>
          </div>
        </div>

        <div id={ID} className="mt-5">
          <h1 id={ID}>Person detected.</h1>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
