import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = collection => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy('createdAt', 'desc') // ordered by time created in DESCending order
			.onSnapshot(snap => {
				let documents = [];
				// Looping through the image files in Firebase
				snap.forEach(doc => {
					documents.push({ ...doc.data(), id: doc.id });
					// let unique = [...new Set(documents.url)]; // remove duplicates??
				});
				setDocs(documents);
			});

		return () => unsub();
		// Cleanup function
	}, [collection]);

	return { docs };
};

export default useFirestore;
