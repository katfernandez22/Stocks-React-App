import React, { useEffect, useState } from "react";
import fetchData from "../FetchData";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  useEffect(async () => {
    let data = await fetchData(search);
    setData(data);
  }, [search]);
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <br />
      {search != "" && data != "" ? (
        <div style={{ color: "white" }} className="border">
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
      ) : null}
    </>
  );
}

export default Search;