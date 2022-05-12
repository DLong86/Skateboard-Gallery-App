import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			// login
			const res = await projectAuth.signInWithEmailAndPassword(email, password);

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user });

			setIsPending(false);
			setError(null);
			navigate(ROUTES.DASHBOARD);
		} catch (err) {
			// if (!isCancelled) {
			// 	setError(err.message);
			// 	setIsPending(false);
			// }
			setError(err.message);
			setIsPending(false);
		}
	};

	return { login, isPending, error };
};
