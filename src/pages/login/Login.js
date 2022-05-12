import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isPending } = useLogin();

	// const isInvalid = password === '' || email === '';

	const handleSubmit = e => {
		e.preventDefault();

		login(email, password);

		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles['login-form']}>
				<h2>Login</h2>
				{error && <p className='error'>{error}</p>}
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
				{!isPending && <button className='btn'>Login</button>}
				{isPending && (
					<button className='btn' disabled>
						loading
					</button>
				)}
			</form>
		</div>
	);
};

export default Login;
