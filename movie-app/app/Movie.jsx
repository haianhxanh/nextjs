import React from "react";
import Link from "next/link";

const Movie = ({ id, title, release_date, poster_path }) => {
  const imagePath = `https://image.tmdb.org/t/p/original`;
  return (
    <div>
      <h1 className="uppercase font-bold">{title}</h1>
      <h2>Release date: {release_date}</h2>
      <Link href={`/${id}`}>
        <img src={imagePath + poster_path} alt="" />
      </Link>
    </div>
  );
};

export default Movie;
