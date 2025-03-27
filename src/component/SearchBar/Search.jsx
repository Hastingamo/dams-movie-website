import React, { useState } from "react";
import { Data } from "../user/users";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [store] = useState(Data);
  const [data, setData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  useEffect(() => {
    // Only perform filtering if `data` is not empty
    if (data.trim() !== "") {
      const filtered = store.filter((curValue) => {
        return (
          curValue.movie_name?.toLowerCase().includes(data.toLowerCase()) ||
          curValue.duration?.toLowerCase().includes(data.toLowerCase())
        );
      });

      setFilteredData(filtered); // Update filtered data state
    } else {
      setFilteredData([]); // If no input, reset filtered data
    }
  }, [data, store]); // Runs whenever `data` or `store` changes

  const limitedData = filteredData.slice(0, 5);
  // const resultStyle = limitedData.length > 0 ? {} : { display: "none" };

  return (
    <div className="container">
      <input
        placeholder="search"
        onChange={getData}
        className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
      ></input>
      {/* <img
        className="w-5 h-5 absolute top-7 left-[11rem] xm:left-[16rem] md:left-[18rem] md:w-8 md:h-8"
        src="images/loupe.png"
        alt=""
      /> */}

      {limitedData.length > 0 ? (
        limitedData.map((curValue) => (
          <Link
            to={`/Detail/${curValue.id}`}
            key={curValue.id || curValue.movie_name}
          >
            <div className={"flex flex-row ml-4 gap-8"}>
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
          </Link>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
export default Search;
