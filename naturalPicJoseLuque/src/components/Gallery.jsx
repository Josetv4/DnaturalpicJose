import React, { useEffect, useState } from 'react';
import { usePhotoContext } from '../context/PhotoContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { addToFavorites, removeFromFavorites, favorites } = usePhotoContext();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.error('Error al cargar las fotos: ', error);
      });
  }, []);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.original})` }}
        >
          {favorites.find((fav) => fav.id === photo.id) ? (
            <button onClick={() => removeFromFavorites(photo)}>
              <IconHeart filled={true} />
            </button>
          ) : (
            <button onClick={() => addToFavorites(photo)}>
              <IconHeart filled={false} />
            </button>
          )}
          <div className="description">{photo.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;




