import { Link } from "react-router-dom";
import imgDoc from '../assets/doc.jpg'
import imgSkeletonHeart from '../assets/heart-svgrepo1.svg'
import imgHeart from '../assets/heart-svgrepo.svg'
import { useState, useEffect } from "react";

let favoritesArray = [];

const Card = ({ name, username, id, favoriteHidden }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favoritesArray = JSON.parse(storedFavorites);
      const isDuplicate = favoritesArray.some((favorite) => favorite.id === id);
      setIsFavorite(isDuplicate);
    }
  }, [id]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const storedFavorites = localStorage.getItem("favorites") || "[]";
    const favoritesArray = JSON.parse(storedFavorites);

    const isDuplicate = favoritesArray.some((favorite) => favorite.id === id);

    if (!isDuplicate) {
      const newFavorite = { name, username, id };
      favoritesArray.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
      setIsFavorite(true);
    } else {
      const newFavorites = favoritesArray.filter((favorite) => favorite.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    }
  }

  return (
    <div className="card text-center rounded-md
    shadow-lg dark:bg-red-100">
      <Link to={`/dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={imgDoc}
          className="rounded-md"
          alt="image doc" />
        <p className="my-1 font-semibold text-gray-700
      ">{name}</p >
        <p className="text-sm">{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link >
      <button onClick={addFav} className="w-10 h-10 p-2">
        {
          favoriteHidden ? (isFavorite ? <img src={imgHeart} alt="" />
            : <img src={imgSkeletonHeart} alt="" />) : ("")

        }
      </button>
    </div>
  );
};

export default Card;
