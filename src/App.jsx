import './App.css';
import Homepage from './Containers/Homepage';
import Suisuipage from './Containers/Suisuipage';
import Systempage from './Containers/Systempage';
import Softwarepage from './Containers/Softwarepage';
import Paperless from './Containers/Paperless';
import Realtimepage from './Containers/Realtime';
import Filterpage from './Containers/Filterpage';
import CloudSubpage from './Containers/CloudSubpage';
// import Footer from './Components/Footer';
import MainCustomer from './Containers/MainCustomer';
import BitSoftTeam from './Containers/BitSoftTeam';
import Footer2 from './Components/Footer2';
import Dashboard2 from './Containers/Dashboard2';

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Homepage />
			<Suisuipage />
			<Systempage />
			<Softwarepage />
			<Dashboard2 />
			<Paperless />
			<Realtimepage />
			<Filterpage />
			<CloudSubpage />
			<MainCustomer />
			<BitSoftTeam />
			<Footer2 />
		</>
	);
}

export default App;
