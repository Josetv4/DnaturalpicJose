import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

export function usePhotoContext() {
    return useContext(PhotoContext);
}

export function PhotoProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (photo) => {
        if (!favorites.find((fav) => fav.id === photo.id)) {
            setFavorites([...favorites, photo]);
        }
    };

    const removeFromFavorites = (photo) => {
        setFavorites(favorites.filter((fav) => fav.id !== photo.id));
    };

    return (
        <PhotoContext.Provider
            value={{
                photos,
                favorites,
                addToFavorites,
                removeFromFavorites,
            }}
        >
            {children}
        </PhotoContext.Provider>
    );
}
