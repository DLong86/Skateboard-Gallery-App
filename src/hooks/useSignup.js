import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);

		try {
			// signup
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);

			if (!res) {
				throw new Error('Could not complete signup');
			}

			// add display name to user
			await res.user.updateProfile({ displayName });

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user });

			navigate(ROUTES.DASHBOARD);
			setIsPending(false);
			setError(null);
		} catch (err) {
			console.log(err.code);
			console.log('worked');
			setError(err.message);
			setIsPending(false);
		}
	};

	return { signup, error, isPending };
};
