import React, { useEffect, useState } from "react";
import DetailsMap from "../DetailsMap/DetailsMap";
import "./DetailsShow.css";

const DetailsShow = ({ infoDatas, detailId }) => {
  const uniqueDetail = infoDatas.filter((item) => item.ID === detailId);

  return (
    <div>
      {/* {

          infoAllDetails.map(infoAllDetail => <DetailsMap
           key={infoAllDetail.ID} infoAllDetailData = {infoAllDetail}
          />)
          
        } */}

      <DetailsMap uniqueDetail={uniqueDetail} />
    </div>
  );
};

export default DetailsShow;
