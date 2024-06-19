import { useEffect, useState } from "react";
import Movie from "./Movie";
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
		setMovies(json.data.movies);
		setIsLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<h1>Welcome to My Movie List!</h1>
					<ul>
						{movies.map(movie => (
							<Movie key={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
						))}
					</ul>
				</>
			)}
		</div>
	);
}

export default App;
