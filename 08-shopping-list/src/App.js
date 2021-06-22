import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import Form from "./components/Form";
import List from "./components/List";
import Notification from "./components/Notification";

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) {
		return JSON.parse(localStorage.getItem('list'));
	}
	else {
		return [];
	}
}

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [notif, setNotif] = useState({ show: false, message: '', type: '' });
	const [isEmpty, setIsEmpty] = useState(false);

	const handleSubmit = (ev) => {
		ev.preventDefault();

		if (!name) {
			setIsEmpty(true);
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editId) {
						return { ...item, title: name }
					}
					return item;
				})
			);

			setName('');
			setEditId(null);
			setIsEditing(false);
			setIsEmpty(false);
			showNotification(true, "success", "Valeur modifiée");
		} else {
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName('');
			setIsEmpty(false);
			showNotification(true, "success", "Ajouté à la liste");
		}
	}

	const showNotification = (show = false, type = "", message = "") => {
		setNotif({ show, type, message });

		const timeout = setTimeout(() => {
			setNotif({ type, message });
		}, 3000);

		return () => clearTimeout(timeout);
	}

	const editItem = (id) => {
		const modifyItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditId(id);
		setName(modifyItem.title);
	}

	const deleteItem = (id) => {
		showNotification(true, "danger", "Item supprimé de la liste")
		setList(list.filter((item) => item.id !== id));
	}

	const clearList = () => {
		showNotification(true, "danger", "Votre liste a été entièrement vidée");
		setList([]);
	}

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list])

	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Liste de course</h1>
			<section>
				<Notification notif={notif} />
				<h2 className="text-center">Liste</h2>
				<div className="col-md-3 mx-auto">
					<Form handleSubmit={handleSubmit} isEmpty={isEmpty} isEditing={isEditing} name={name} setName={setName} />
				</div>
				<div className="my-4 col-lg-8 mx-auto">
					{
						!isEditing &&
						(
							list.length > 0 &&
							<div className="text-center">
								<List items={list} deleteItem={deleteItem} editItem={editItem} />
								<button onClick={clearList} className="mt-5 btn btn-danger">Tout supprimer</button>
							</div>
						)
					}
				</div>
			</section>
		</main>
	);
}

export default App;
