import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 模擬數據抓取
    setTimeout(() => {
      setData("這是從伺服器抓取的數據。");
    }, 2000);
  }, []); // 空依賴陣列表示只在組件掛載時執行一次

  return (
    <div className="container">
      <h1>數據抓取範例</h1>
      {data ? <p>{data}</p> : <p>加載中...</p>}
    </div>
  );
}

export default DataFetcher;