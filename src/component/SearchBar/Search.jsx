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
        curValue.name?.toLowerCase().includes(data.toLowerCase()) || 
        curValue.brand?.toLowerCase().includes(data.toLowerCase())
    );
  });

  return (
    <div className="container">
      <input type="text" placeholder="Search Here.." onChange={getData} />
      <div className="type">
        <h3>Name</h3>
        <h3>Brand</h3>
        <h3>Images</h3>
      </div>
      {filterOut.map((cur) => {
        return (
          <div className="flex flex-row ml-7 mt-9">
            <p>{cur.movie_name}</p>
            <p>{cur.duration}</p>
            <img src={cur.images} />
          </div>
        );
      })}
    </div>
  );
};
export default Search;
