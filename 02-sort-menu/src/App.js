import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import items from "./dataMenu";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const allCategories = ['Tout', ...new Set(items.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "Tout") {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	}

	return (
		<section className="">
			<h1 className="py-5 mb-5 text-center">Filtre</h1>
			<Categories filterItems={filterItems} categories={categories} />
			<Menu items={menuItems} />
		</section>
	);
}

export default App;
