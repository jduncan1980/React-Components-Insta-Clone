// You do not need to change any code in this file
import React, { useContext } from 'react';
import Logo from '../../assets/instagram.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
	faHeart,
	faCircle,
	faCompass,
} from '@fortawesome/free-regular-svg-icons';
import './SearchBar.css';
import { MainContext } from '../../contexts/mainContext';

const SearchBar = () => {
	const { searchParams, setSearchParams } = useContext(MainContext);
	return (
		<div className='search-bar-wrapper'>
			<div className='social-gram'>
				<FontAwesomeIcon icon={faInstagram} />
				<img src={Logo} alt='Instagram' className='insta-text-logo' />
			</div>
			<form
				className='search-form'
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type='text'
					value={searchParams}
					placeholder='&#128269; Search'
					onChange={(e) => {
						setSearchParams(e.target.value);
					}}
				/>
			</form>
			<div className='social-wrapper'>
				<div className='social'>
					<FontAwesomeIcon icon={faCompass} />
				</div>
				<div className='social'>
					<FontAwesomeIcon icon={faHeart} />
				</div>
				<div className='social'>
					<FontAwesomeIcon icon={faCircle} />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
