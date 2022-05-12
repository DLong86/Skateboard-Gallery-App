import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
	const { authIsReady, user } = useAuthContext();
	return (
		<div className='App'>
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={user ? <Home /> : <Navigate to='/login' />}
						/>
						<Route
							path='/login'
							element={user ? <Navigate to='/' /> : <Login />}
						/>
						<Route
							path='/signup'
							element={user ? <Navigate to='/' /> : <Signup />}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
