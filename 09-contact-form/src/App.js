import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Success from "./components/SubmitSuccess";

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [data, setData] = useState({});

	const submitForm = (data) => {
		setIsSubmitted(true);
		setData(data)
	}

	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Formulaire</h1>
			<section>
				<div className="container">
					{
						!isSubmitted ?
							<Form submitForm={submitForm} /> :
							<Success setIsSubmitted={setIsSubmitted} data={data} />
					}
				</div>
			</section>
		</main>
	);
}

export default App;
