import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CastList = () => {
  const { category, id } = useParams();
  const [casts, setCasts] = useState([]);
  const API_KEY = "cefba94a8355c33d34ceea35237af99b";

  // Helper to get image URL or fallback
  const getImageUrl = (path) =>
    path
      ? `https://image.tmdb.org/t/p/w500${path}`
      : "https://via.placeholder.com/150x225?text=No+Image";

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCasts(data.cast?.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    getCredits();
  }, [category, id]);

  return (
    <div className="flex gap-4 flex-wrap">
      {casts.map((cast, index) => (
        <div key={index} className="w-24 text-center">
          <div
            className="w-24 h-36 bg-cover bg-center rounded-lg shadow"
            style={{ backgroundImage: `url(${getImageUrl(cast.profile_path)})` }}
          ></div>
          <p className="text-sm mt-2 text-white">{cast.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
