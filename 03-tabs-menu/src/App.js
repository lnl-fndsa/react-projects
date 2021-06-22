import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
	const menu = [
		{
			id: 1,
			page: 'Accueil'
		},
		{
			id: 2,
			page: 'A propos'
		},
		{
			id: 3,
			page: 'Contact'
		},
	];

	const [menuValue, setMenuValue] = useState(1);
	const [active, setActive] = useState(1);

	const handleClick = (id) => {
		setMenuValue(id);
		setActive(id)
	}

	const renderSwitch = (id) => {
		switch (id) {
			case 1:
				return <Page1 />;
			case 2:
				return <Page2 />;
			case 3:
				return <Page3 />;
			default:
				return <Page1 />;
		}
	}

	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Onglets</h1>
			<section>
				<div className="mb-4 menu text-center">
					{
						menu.map((item) => {
							const { id, page } = item;
							return (
								<button
									key={id}
									onClick={() => handleClick(id)}
									className={`py-2 px-4${id === active ? ' active' : ''}`}
								>
									{page}
								</button>
							)
						})
					}
				</div>
				<div className="container page">
					{renderSwitch(menuValue)}
				</div>
			</section>
		</main>
	);
}

export default App;
