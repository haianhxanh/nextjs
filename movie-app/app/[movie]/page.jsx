export default async function MovieDetail({ params }) {
  const { movie } = params; // coming from [movie] directory
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <div>
      <nav>
        <a
          href="/"
          className="inline-block text-sm bg-green-600 my-2 py-2 px-2"
        >
          Back to all movies
        </a>
      </nav>
      <h1 className="my-10 text-3xl">{res.title}</h1>
      <h3>Release date: {res.release_date}</h3>
      <div>Runtime: {res.runtime} minutes</div>
      <img
        className="my-12"
        src={imagePath + res.backdrop_path}
        alt={res.title}
      />
      <p>{res.overview}</p>
      <div className="my-5">
        <a
          href={`https://imdb.com/title/${res.imdb_id}`}
          target="_blank"
          className="underline decoration-solid"
        >
          See on IMDB
        </a>
      </div>
    </div>
  );
}
