import { useState } from "react";
import {
	Navbar,
} from "./components";
import "./App.css";

function App() {
	//*ESTADO
	//para el menú lateral
	const [isOpen, setIsOpen] = useState(false);

	//*HANDLER
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar isOpen={isOpen} toggle={toggle} />
		</>
	);
}

export default App;
