
import searchIcon from '../assets/images/icon-search.svg';

function SearchForm({ onSubmit, word, onWordChange, error }) {
	return (
		<form onSubmit={onSubmit} className={error ? 'errorBorder' : ''}>
			<label aria-label='Search'>
				<input
					onChange={(e) => onWordChange(e.target.value)}
					value={word}
					placeholder='Search for any word...'
				/>
			</label>
			<button type='submit' aria-label='Submit'>
				<img src={searchIcon} alt='' />
			</button>
		</form>
	);
}

export default SearchForm;
