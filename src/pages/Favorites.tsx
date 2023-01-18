import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store/favorite-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content: React.ReactElement<any, any>;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <div className="text-center mt-20">
        <p>You got no favorites yet.</p>
        <p>Start adding some.</p>
      </div>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 className="px-10 py-2.5 text-2xl font-semibold mx-auto ">
        My Favorites
      </h1>
      {content};
    </section>
  );
}

export default FavoritesPage;
