import applogo from '../assets/images/logo.svg';
import Mode from './Mode.js';
import { useState, useEffect } from 'react';

function Header() {
	const [dropDown, setDropDown] = useState(false);
	const [font, setFont] = useState('Sans Serif');

	useEffect(() => {
		if (font === 'Sans Serif') {
			document.documentElement.style.setProperty('--main-font', 'sans-serif');
		} else if (font === 'Serif') {
			document.documentElement.style.setProperty('--main-font', 'serif');
		} else if (font === 'Mono') {
			document.documentElement.style.setProperty('--main-font', 'monospace');
		}
	}, [font]);

	function handleClick(e) {
		setFont(e.target.innerHTML);
		setDropDown(false);
	}

	return (
		<header>
			<img src={applogo} alt='logo' />
			<div className='style-inline'>
				<div className='font-lists'>
					<button onClick={() => setDropDown((prevState) => !prevState)}>
						{font}
					</button>
					{dropDown && (
						<ul onClick={(e) => handleClick(e)}>
							<li>Sans Serif</li>
							<li>Serif</li>
							<li>Mono</li>
						</ul>
					)}
				</div>
				<Mode />
			</div>
		</header>
	);
}

export default Header;
