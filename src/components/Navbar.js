import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import styles from './Navbar.module.css';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	return (
		<nav className={styles.navbar}>
			<ul>
				<img className={styles.img} src='./VX1000.jpg' alt='' />
				<li className={styles.title}>
					<Link to='/'>Skate Gallery</Link>
				</li>
				{!user && (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/signup'>Signup</Link>
						</li>
					</>
				)}
				{user && (
					<>
						<li className={styles.displayName}>{user.displayName}</li>
						<li>
							<button className={styles['logout-btn']} onClick={logout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
