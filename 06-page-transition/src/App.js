import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Nav from './components/layout/Nav';
import Page from './components/layout/Page';

const routes = [
	{ id: 1, path: '/', name: 'Accueil', Component: Home },
	{ id: 2, path: '/about', name: 'A propos', Component: About },
	{ id: 3, path: '/contact', name: 'Contact', Component: Contact }
]

function App() {
	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Transition de page</h1>
			<div className="container">
				<Router>
					<Nav routes={routes} />
					<Page routes={routes} />
				</Router>
			</div>
		</main>
	);
}

export default App;
