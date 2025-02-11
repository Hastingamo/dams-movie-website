import { useState } from "react";
import { Users } from "../user/User";
function SearchBar() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <>
      <div>
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
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
