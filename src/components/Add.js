import React, { useState } from 'react'
import ResultCard from '../components/ResultCard'

function Add() {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])

	const onChange = (e) => {
		e.preventDefault()
		setQuery(e.target.value)

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}`
		).then((res) =>
			res.json().then((data) => {
				if (!data.errors) {
					setResults(data.results)
				} else {
					setResults([])
				}
			})
		)
	}

	return (
		<div className='add-page'>
			<div className='container'>
				<div className='add-content'>
					<div className='input-wrapper'>
						<input
							type='text'
							placeholder='Search for a movie'
							value={query}
							onChange={onChange}
						/>
					</div>
				</div>
				{results.length > 0 && (
					<ul className='results'>
						{results.map((movie) => (
							<li key={movie.id}>
								<ResultCard movie={movie} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Add
