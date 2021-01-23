import React, { useEffect, useState } from "react";
import fetchData from "../FetchData";

function Stocks() {
  const [data, setData] = useState([]);
  const stocks = ["SPY", "FB", "SNAP", "nasdaq"];
  var temp = [];
  useEffect(() => {
    stocks.map(async (name) => {
      let data = await fetchData(name);
      temp.push(data);
    });
    setTimeout(() => {
      setData(temp);
    }, [2000]);
  }, []);

  return (
    <>
      {data &&
        data.map((data, i) => (
          <>
            <div key={i} style={{ color: "white" }} className="border">
              <div className="left">
                <div className="stock_name">{data.symbol}</div>
                <div className="full_name">{data.companyName}</div>
              </div>
              <div className="right">
                <div>{data.open}</div>
                <div
                  className={
                    data.change > 1 ? "green_percentage" : "red_percentage"
                  }
                >
                  {data.change}%
                </div>
              </div>
            </div>
            <br />
            <br />
          </>
        ))}
    </>
  );
}

export default Stocks;