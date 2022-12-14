import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Containers/Homepage';
import Suisuipage from './Containers/Suisuipage';
import Systempage from './Containers/Systempage';
import Softwarepage from './Containers/Softwarepage';
import Dashboard from './Containers/Dashboard';
import Paperless from './Containers/Paperless';
import Realtimepage from './Containers/Realtime';
import Filterpage from './Containers/Filterpage';
import CloudSubpage from './Containers/CloudSubpage';
import Footer from './Components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Homepage />
			<Suisuipage />
			<Systempage />
			<Softwarepage />
			<Dashboard />
			<Paperless />
			<Realtimepage />
			<Filterpage />
			<CloudSubpage />
			<Footer />
		</>
	);
}

export default App;
