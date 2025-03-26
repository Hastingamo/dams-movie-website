import React from 'react'

function AddToList() {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {List.length === 0 ? <p>No favorites yet.</p> : (
        <ul>
          {List.map((movie) => (
            <li key={movie.id}>{movie.title} ({movie.year})</li>
          ))}
        </ul>
      )}
    </div>  )
}

export default AddToList