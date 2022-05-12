import { useState } from 'react';
import styles from './Home.module.css';
import UploadForm from '../../components/UploadForm';
import ImageGrid from '../../components/ImageGrid';
import Modal from '../../components/Modal';

const Home = () => {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<div className={styles['home-container']}>
			<h1 className={styles.logo}>Skate Gallery</h1>
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			)}
		</div>
	);
};

export default Home;
