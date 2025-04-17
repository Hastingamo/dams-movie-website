import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API constants
const API_KEY = "cefba94a8355c33d34ceea35237af99b";
const BASE_URL = "https://api.themoviedb.org/3/search/tv";

function Searchs() {
  const [query, setQuery] = useState("");      // Search query input state
  const [series, setSeries] = useState([]);    // Search results state

  const handleInputChange = (e) => {
    setQuery(e.target.value);                  // Update query as user types
  };

  useEffect(() => {
    const fetchSeries = async () => {
      if (query.trim() === "") {
        setSeries([]);                         // Clear results if query is empty
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setSeries(data.results || []);         // Save results or empty array
      } catch (error) {
        console.error("Error fetching series:", error);
        setSeries([]);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSeries();                            // Debounced fetch call
    }, 500);

    return () => clearTimeout(delayDebounce);   // Cleanup timeout on query change
  }, [query]);

  const limitedResults = series.slice(0, 5);     // Limit results to 5

  return (
    <div>
      <input
        placeholder="Search for TV series..."
        onChange={handleInputChange}
        className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
      />

      {limitedResults.length > 0 ? (
        limitedResults.map((item) => (
            <Link
            to={`/tv/${item.id}`}
            key={item.id}
              className="flex flex-row ml-4 gap-8"
            >
            <div className="flex flex-row gap-6">
              <div>
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
                      : "https://via.placeholder.com/100x150?text=No+Image"
                  }
                  alt={item.name}
                  className="w-16 h-24 mt-5"
                />
              </div>
              <div className="flex flex-col">
                <p className="mt-5 text-2xl md:text-3xl">
                  {item.name || "No title available"}
                </p>
                <p className="mt-3 md:text-2xl">
                  First Air Date: {item.first_air_date || "N/A"}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        query && <p className="ml-4 mt-2">No results found</p>
      )}
    </div>
  );
}

export default Searchs;
