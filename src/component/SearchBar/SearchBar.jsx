import { useState } from "react";
import Records from "../user/User.json";
function SearchBar() {
  const [query, setQuery] = useState("");


  // Filter the data based on the search query
  return (
    <>
      {/* <div>
        <input
          className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
          placeholder="search"
          type="text"  
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id}>{user.images}</li>

          ))}
        </ul>
 
      </div> */}
      <div>
        <input
          className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
          placeholder="search"
          type="text"
        onChange={(e) => setQuery(e.target.value)}
        />
        {Records.map((user) => {
          return (
            <div key={user.id}>
              {user.first_name}
              <img className="w-12 h-12" src={user.images} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchBar;
