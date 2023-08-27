import moon from '../assets/images/icon-moon.svg';

import { useState, useEffect } from 'react';

function Mode() {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((modeChange) => !modeChange);
	};

	useEffect(() => {
		document.body.classList.toggle('dark-mode', darkMode);
	}, [darkMode]);

	return (
		<>
			<div className='toggle-switch'>
				<input
					onChange={toggleDarkMode}
					type='checkbox'
					className='checkbox'
					name='toggle'
					id='toggle'
				/>
				<label className='label' htmlFor='toggle'>
					<span className='inner' />
					<span className='switch' />
				</label>
			</div>
			<img src={moon} alt='' />
		</>
	);
}

export default Mode;
