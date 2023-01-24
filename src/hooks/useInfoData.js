import React, { useEffect, useState } from "react";

const useInfoData = () => {
  const [infoDatas, setInfoDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("InfoData.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setInfoDatas(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return [infoDatas,loading];
};

export default useInfoData;
