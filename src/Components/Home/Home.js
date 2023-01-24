import React, { useEffect, useState } from "react";
import useInfoData from "../../hooks/useInfoData";
import DetailsShow from "../DetailsShow/DetailsShow";
import Event from "../Event/Event";

const Home = () => {
  const [infoDatas, loading] = useInfoData();
  const [detailId, setDetailID] = useState("EVT0001");
  if (loading) {
    return <h2>Loading....</h2>;
  }

  const handleDetailId = (event) => {
    setDetailID(event.target.id);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* details show */}
        <div>
          <DetailsShow infoDatas={infoDatas} detailId={detailId} />
        </div>

        {/* event section */}
        <div>
          <Event handleDetailId={handleDetailId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
