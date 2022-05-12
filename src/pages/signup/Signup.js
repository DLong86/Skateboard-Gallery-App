import { useState } from 'react';

import { useSignup } from '../../hooks/useSignup';

import styles from './Signup.module.css';

const Signup = () => {
	const [displayName, setdisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, isPending, error } = useSignup();

	const isInvalid = password === '' || email === '' || displayName === '';

	const handleSubmit = e => {
		e.preventDefault();

		signup(email, password, displayName);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles['signup-form']}>
				<h2>Signup</h2>
				{error && <p className='error'>{error}</p>}
				<label>
					<span>username</span>
					<input
						type='text'
						onChange={e => setdisplayName(e.target.value)}
						value={displayName}
					/>
				</label>
				<label>
					<span>email</span>
					<input
						type='text'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>password</span>
					<input
						type='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</label>

				{!isPending && (
					<button disabled={isInvalid} className='btn'>
						sign up
					</button>
				)}
				{isPending && (
					<button className='btn' disabled>
						loading
					</button>
				)}
			</form>
		</div>
	);
};

export default Signup;
