import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn) {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f4 link black grow underline pa2 ma1 pointer'>Odjava</p>
			</nav>
		);
		}
		else {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() =>onRouteChange('signin')} className='f4 link black grow underline pa2 ma1 pointer'>Prijava</p>
				<p onClick={() =>onRouteChange('register')} className='f4 link black grow underline pa2 ma1 pointer'>Registracija</p>
			</nav>
	);
}
}
export default Navigation;
