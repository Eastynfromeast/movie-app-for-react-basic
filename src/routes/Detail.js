import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [detail, setDetail] = useState("");
	const getdetail = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		console.log(json.data.movie);
		setDetail(json.data.movie);
		setIsLoading(false);
	};

	useEffect(() => {
		getdetail();
	}, []);
	return (
		<div>
			<h1>Detail</h1>
			{isLoading ? (
				<h2>We are calling the movie detail...</h2>
			) : (
				<div>
					<img src={detail.medium_cover_image} />
					<h2>
						{detail.title} <span>{`(${detail.year})`}</span>
					</h2>
					<ul>
						{detail.genres.map((g, i) => (
							<li key={i}>{g}</li>
						))}
					</ul>
					<p>{detail.description_full}</p>
				</div>
			)}
		</div>
	);
}

export default Detail;
