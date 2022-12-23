import { Routes, Route } from 'react-router-dom';
import Homepage from '../Containers/Homepage';
import MainCustomer from '../Component2/MainCustomer';

function Routers() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/Customers' element={<MainCustomer />} />
		</Routes>
	);
}

export default Routers;
