import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import database from './database.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mb1 mt0'>
			<Tilt className="Tilt br2 shadow-3 bg-light-red" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '2px'}} alt='logo' src={database}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;