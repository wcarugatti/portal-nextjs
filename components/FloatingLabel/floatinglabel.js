import React from 'react';
import './floatinglabel.css';

export default ({ type, name, placeholder, value, onChangeText, isActive }) => {
	return (
		<div id='float-label'>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChangeText}
				className='bg-light btn-outline-secondary mb-1'
				autocomplete='off'
			/>

			<label className={isActive ? 'Active' : ''} htmlFor={type}>
				{placeholder}
			</label>
		</div>
	);
};
