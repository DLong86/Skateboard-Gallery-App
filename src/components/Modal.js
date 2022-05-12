import ImageHeader from "./ImageHeader";

const Modal = ({ selectedImg, setSelectedImg }) => {
	const handleClick = e => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	};
	return (
		<div className='backdrop' onClick={handleClick}>
			<ImageHeader />
			<img src={selectedImg} alt='enlarged skateboard image / art' />
		</div>
	);
};

export default Modal;
