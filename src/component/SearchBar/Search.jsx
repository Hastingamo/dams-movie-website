import React, { useState } from "react";
import { Data } from "../user/users";

const Search = () => {
  const [store] = useState(Data);
  const [data, setData] = useState("");
  const [display, setDisplay] = useState("");

  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
    setDisplay("none")
  };

  let filterOut = store.filter((curValue) => {
    return (
      curValue.movie_name?.toLowerCase().includes(data.toLowerCase()) ||
      curValue.duration?.toLowerCase().includes(data.toLowerCase())
    );
  });
  const limitedData = filterOut.slice(0, 5);

  return (
    <div className="container">
      <input type="text" placeholder="Search Here.." onChange={getData} />

      {limitedData.length > 0 ? (
        limitedData.map((curValue) => (
          <div
            key={curValue.id || curValue.name}
            className={`flex flex-row ml-4 gap-8  || ${display}`}
          >
            {/* Ensure you use proper property names */}
            <div className="flex flex-row gap-6">
              <div>
                <img
                  src={curValue.images}
                  alt={curValue.name || "Image"}
                  className="w-16 h-24 mt-5"
                />
              </div>
              <div className="flex flex-col">
                <p className="mt-5 text-2xl md:text-3xl">
                  {curValue.movie_name || "No name available"}
                </p>
                <p className="mt-3 md:text-2xl">
                  {curValue.duration || "No brand available"}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
export default Search;
