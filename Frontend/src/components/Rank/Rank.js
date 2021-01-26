import React from 'react';
import './Rank.css';

const Rank = ({name ,entries, email , faculty, mentor, nameofthesis}) => {
	return(
		<div className='p_div'>
			<div className='near-black f3 w-70 center'>
				{`${name}, Dobrodošli na vašu stranicu za praćenje izrade diplomskog projekta.`}
			</div>
			<div className='title near-black f3 w-70 center'>
				{`Naslov diplomskog projekta: ${nameofthesis}`}
			</div>
			<div className='facultymain near-black f3'>
				<div className='faculty'>{`FAKULTET: ${faculty}`}</div>
				<div>{`MENTOR: ${mentor}`}</div>
			</div>

		</div>	
	);
}

export default Rank;