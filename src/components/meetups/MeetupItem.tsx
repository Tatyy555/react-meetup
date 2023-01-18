import React, { useContext } from "react";
import FavoritesContext from "../store/favorite-context";

type MeetupItemType = {
  meetup: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  };
};

function MeetupItem(props: MeetupItemType) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.meetup.id,
        title: props.meetup.title,
        description: props.meetup.description,
        image: props.meetup.image,
        address: props.meetup.address,
      });
    }
  }

  return (
    <li className="flex flex-col cursor-pointer transition-all duration-200 hover:scale-105 p-5 m-5 rounded-lg bg-gray-100 items-start shadow-xl overflow-scroll ">
      <div className="flex flex-col items-center justify-center w-full">
        <img
          className="object-cover h-32 w-64 rounded"
          src={props.meetup.image}
          alt={props.meetup.title}
        />
      </div>
      <div className="px-16 sm:px-6 lg:px-2 mt-5 w-full">
        <h3 className="text-center font-semibold">{props.meetup.title}</h3>
        <address className="text-center">{props.meetup.address}</address>
        <p className="font-extralight">{props.meetup.description}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-1 text-center  my-2"
          onClick={toggleFavoritesStatusHandler}
        >
          {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
        </button>
      </div>
    </li>
  );
}

export default MeetupItem;
