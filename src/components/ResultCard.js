import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ResultCard({ movie }) {
	const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
		useContext(GlobalContext)
	let storedMovie = watchlist.find((object) => object.id === movie.id)
	let storedMovieWatched = watched.find((object) => object.id === movie.id)

	const watchlistDisabled = storedMovie
		? true
		: storedMovieWatched
		? true
		: false

	const watchedDisabled = storedMovieWatched ? true : false

	return (
		<div className='result-card'>
			<div className='poster-wrapper'>
				{movie.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
						alt={movie.title}
					/>
				) : (
					<img src='https://bit.ly/3xxQR5V' alt={movie.title} />
				)}
			</div>
			<div className='info'>
				<div className='header'>
					<h3 className='title'>{movie.title}</h3>
					<h4 className='release-date'>
						{movie.release_date ? movie.release_date.substring(0, 4) : '-'}
					</h4>
				</div>
				<div className='controls'>
					<button
						className='btn'
						disabled={watchlistDisabled}
						onClick={() => addMovieToWatchlist(movie)}
					>
						Add to Watchlist
					</button>
					<button
						className='btn'
						disabled={watchedDisabled}
						onClick={() => addMovieToWatched(movie)}
					>
						Add to Watched
					</button>
				</div>
			</div>
		</div>
	)
}

export default ResultCard
