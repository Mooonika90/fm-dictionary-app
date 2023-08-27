import Noresults from './Noresults';
import playBtn from '../assets/images/icon-play.svg';
import newWindow from '../assets/images/icon-new-window.svg';
import { useState } from 'react';

function SearchResults({ def, fetchError }) {
	const [play, setPlay] = useState(false);
	const audioPath = def[0]?.phonetics[2]?.audio;
	const defWord = def[0]?.word;
	const phonetic = def[0]?.phonetic;

	const meandef = def.meanings;

	console.log(def);

	return (
		<section className='def'>
			<header>
				<div>
					<h2>{defWord}</h2>
					<p>{phonetic}</p>
				</div>
				<button aria-label='play' onClick={() => setPlay(true)}>
					{defWord && <img src={playBtn} alt='' />}
				</button>
				{play && (
					<audio src={audioPath} onEnded={() => setPlay(false)} autoPlay />
				)}
			</header>
			<article>
				{def.map((wordData, index) => (
					<div key={index}>
						{wordData.meanings.map((meaning, index) => (
							<div key={index}>
								<h3> {meaning.partOfSpeech}</h3>
								<h4>Meaning</h4>

								<ul>
									{meaning.definitions.map((definition, index) => (
										<li key={index}>
											{definition.definition}
											{definition.example && <p>"{definition.example}"</p>}
										</li>
									))}
								</ul>
								{meaning.synonyms.length > 0 ? (
									<h4>
										Synonyms <span> {meaning.synonyms.join(',')}</span>
									</h4>
								) : (
									''
								)}
							</div>
						))}

						{
							<p className='infoSource'>
								Source
								<a target='_blank' href={wordData.sourceUrls}>
									{wordData.sourceUrls}{' '}
									<span>
										<img src={newWindow} alt='' />
									</span>
								</a>
							</p>
						}
					</div>
				))}
			</article>

			{fetchError && <Noresults />}
		</section>
	);
}

export default SearchResults;
