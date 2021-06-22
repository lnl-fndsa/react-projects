import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from "./context";
import SearchForm from "./components/SearchForm";
import CocktailList from "./components/CocktailList";
import Modal from "./components/Modal";

function App() {
	return (
		<AppProvider>
			<main>
				<h1 className="py-5 mb-5 text-center">Rechercher</h1>
				<div className="container">
					<SearchForm />
					<CocktailList />
					<Modal />
				</div>
			</main>
		</AppProvider>
	);
}

export default App;
