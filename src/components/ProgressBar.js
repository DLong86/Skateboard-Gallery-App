import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
	const { progress, url } = useStorage(file);
	console.log(url);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div>
			<h1>Progress bar</h1>
		</div>
	);
};

export default ProgressBar;
