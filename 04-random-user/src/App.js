import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from "./components/Users";

function App() {
	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Utilisateurs aléatoires</h1>
			<section>
				<div className="container">
					<Users />
				</div>
			</section>
		</main>
	);
}

export default App;
