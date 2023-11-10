import React from 'react';
import { usePhotoContext } from '../context/PhotoContext';
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  const { favorites, removeFromFavorites } = usePhotoContext();

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((photo) => (
          <div
            key={photo.id} className="photo"
            style={{ backgroundImage: `url(${photo.src.original})` }}>
            <button onClick={() => removeFromFavorites(photo)}>
              <IconHeart filled={true} />
            </button>
            {photo.alt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
