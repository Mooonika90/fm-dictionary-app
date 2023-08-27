import { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function Search() {
	const [word, setWord] = useState('Keyboard');
	const [def, setDef] = useState([]);
	const [error, setError] = useState(false);
	const [fetchError, setFetchError] = useState(false);

	const fetchData = (word) => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => (res.status === 200 ? res.json() : Promise.reject(res)))
			.then((data) => {
				setDef(data);
				setError(false);
				setFetchError(false);
			})
			.catch((error) => {
				setError(!word);
				setFetchError(!!word);
				setDef([]);
				console.error('Error fetching data:', error);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchData(word);
	};

	return (
		<>
			<SearchForm
				onSubmit={handleSubmit}
				word={word}
				onWordChange={setWord}
				error={error}
			/>
			{error && <p className='errorInfo'>Whoops, can't be empty</p>}
			<SearchResults def={def} fetchError={fetchError} />
		</>
	);
}
export default Search;
