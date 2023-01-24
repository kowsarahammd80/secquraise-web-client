import React, { useEffect, useState } from "react";
import EventMap from "../EventMap/EventMap";
import "./Event.css";

const Event = ({ handleDetailId }) => {
  const [infoDatas, setInfoDatas] = useState([]);

  useEffect(() => {
    fetch("InfoData.json")
      .then((res) => res.json())
      .then((data) => setInfoDatas(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="overflow-y-auto bg-base-100 event-div mx-2 mt-3 mb-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Events</h1>

        <p className="menu-size">
          <i class="fa-solid fa-bars"></i>
        </p>
      </div>

      {infoDatas.map((infoData) => (
        <EventMap
          key={infoData.ID}
          infoToData={infoData}
          handleDetailId={handleDetailId}
        />
      ))}
    </div>
  );
};

export default Event;
