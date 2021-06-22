import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import data from "./dataAccordion";

const Question = ({ title, text, closeAll, setIsClosed }) => {

	const [showInfo, setShowInfo] = useState(false);
	const infoRef = useRef(null);

	useEffect(() => {
		if (closeAll) {
			setShowInfo(false);
		}

		if (showInfo) {
			infoRef.current.style.maxHeight = infoRef.current.scrollHeight + "px";
		} else {
			infoRef.current.style.maxHeight = null;
		}
		setIsClosed(showInfo);
	}, [showInfo, closeAll])

	return (
		<article className="col-md-10 col-lg-8 mx-auto">
			<div className="row article-header">
				<h3 className="col-12 col-md-11 display-6">{title}</h3>
				<div className="col-12 col-md-1 text-center">
					<button className="btn btn-secondary" onClick={() => setShowInfo(!showInfo)}>
						<FontAwesomeIcon className="" icon={showInfo ? faMinus : faPlus} />
					</button>
				</div>
			</div>
			<div className="my-1 info" ref={infoRef}>
				<p>{text}</p>
			</div>
		</article>
	);
}

function App() {
	const [closeAll, setCloseAll] = useState(false);
	const [isClosed, setIsClosed] = useState(false);

	useEffect(() => {
		if (closeAll && !isClosed) {
			setCloseAll(false)
		}
	}, [isClosed, closeAll])

	return (
		<main>
			<h1 className="py-5 mb-5 text-center">Menu accordéon</h1>
			<section>
				<div className="container">
					<h2 className="mb-4">Foire aux questions</h2>
					<div className="mb-4 col-md-10 col-lg-8 mx-auto text-end">
						<button className="btn btn-primary" onClick={() => setCloseAll(true)}>
							Tout refermer
						</button>
					</div>
					{
						data.map((question) => {
							return <Question key={question.id} {...question} closeAll={closeAll} setIsClosed={setIsClosed} />
						})
					}
				</div>
			</section>
		</main>
	);
}

export default App;