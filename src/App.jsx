import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Containers/Homepage';
import Suisuipage from './Containers/Suisuipage';
import Systempage from './Containers/Systempage';

function App() {
	return (
		<>
			<Navbar />
			<Homepage />
			<Suisuipage />
			<Systempage />
		</>
	);
}

export default App;
