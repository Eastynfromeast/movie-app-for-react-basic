import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<li>
			<Link to={`/movie/${id}`}>
				<img src={coverImg} alt={`${title} 's poster`} />
				<div>
					<h2>{title}</h2>
					<p>{summary}</p>
					<ul>
						{genres.map((g, i) => (
							<li key={i}>{g}</li>
						))}
					</ul>
				</div>
			</Link>
		</li>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.array,
};

export default Movie;
