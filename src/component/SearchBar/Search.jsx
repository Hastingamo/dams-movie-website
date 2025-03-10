import React, { useState } from "react";
import { Data } from "../user/users";

const Search = () => {
  const [store] = useState(Data);
  const [data, setData] = useState("");

  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  let filterOut = store.filter((curValue) => {
    return (
        curValue.movie_name?.toLowerCase().includes(data.toLowerCase()) || 
        curValue.duration?.toLowerCase().includes(data.toLowerCase())
    );
  });

  return (
    <div className="container">
      <input type="text" placeholder="Search Here.." onChange={getData} />
      <div className="flex flex-row ml-7 gap-9">
        <h3>Name</h3>
        <h3>Brand</h3>
        <h3>Images</h3>
      </div>
      {filterOut.length > 0 ? (
        filterOut.map((curValue) => (
          <div key={curValue.id || curValue.name} className="flex flex-row ml-7 mt-9 gap-9">
            {/* Ensure you use proper property names */}
            
            <p>{curValue.movie_name || "No name available"}</p>
            <p>{curValue.duration || "No brand available"}</p>
            <img src={curValue.images} alt={curValue.name || "Image"} width="100 " height="50" />
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
export default Search;
