import React from 'react';
import { images } from '../../constants/images';

const Preloader = (props) => {
	return (
		<div>
			<img className="spinner" src={images.spinner} alt="spinner" />
		</div>
	);
};

export default Preloader;
