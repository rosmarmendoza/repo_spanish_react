import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const getFavorite = localStorage.getItem("favorites")
  const data = JSON.parse(getFavorite)

  return (
    <div className="h-screen">
      <h1 className="my-4 text-3xl font-semibold
      dark:text-gray-100">Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {
          !data || data.length === 0 ?
            (<p className="h-screen font-semibold text-4xl my-5">No dentists in favorite</p>)
            : (data.map(favorite => <Card name={favorite.name}
              username={favorite.username}
              key={favorite.id}
              favoriteHidden={false} />))
        }
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;