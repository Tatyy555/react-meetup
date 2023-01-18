import React, { createContext, useState } from "react";

type MeetupType = {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
};

const FavoritesContext = createContext<{
  favorites: MeetupType[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: MeetupType) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: MeetupType) => {},
  removeFavorite: (meetupId: string) => {},
  itemIsFavorite: (meetupId: string) => false,
});

export function FavoritesContextProvider(props: any) {
  const [userFavorites, setUserFavorites] = useState<MeetupType[]>([]);

  function addFavoriteHanler(favoriteMeetup: MeetupType) {
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHanler(meetupId: string) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHanler,
    removeFavorite: removeFavoriteHanler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
