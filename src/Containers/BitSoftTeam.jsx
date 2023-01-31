import React from 'react';
import CEO from '../team/CEO.png';
import COO from '../team/COO.png';
import CTO from '../team/PBhon.png';
import SER from '../team/Hnuy.png';
import SER2 from '../team/Golf.png';
import SALE from '../team/Few.png';
import DEV from '../team/Jeff.png';
import TECH from '../team/Maii.png';
function BitSoftTeam() {
	return (
		<div className='bg-[#FFFFFF]'>
			<div className='container mx-auto'>
				<div className='text-center font-extrabold underline decoration-sky-500 text-[50px] EngFont'>
					BITSOFT TEAM
				</div>
				<div className='grid xl:grid-cols-3 grid-cols-1 mt-8'>
					<div className='text-center'>
						<img src={CEO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5 EngFont'>K.Parada Bunnag</p>
						<p className='EngFont'>Chief Executive Officer (CEO)</p>
					</div>
					<div className='text-center'>
						<img src={COO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5 EngFont'>K.Patcharee Bunnag</p>
						<p className='EngFont'>Chief Operating Officer (COO)</p>
					</div>
					<div className='text-center'>
						<img src={CTO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5 EngFont'>K.Bhon Bunnag</p>
						<p className='EngFont'>Chief Technology Officer (CTO)</p>
					</div>
				</div>
				<div className='grid xl:grid-cols-5 grid-cols-1 mt-10 mb-10'>
					<div className='text-center'>
						<img src={SER} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5 EngFont'>Prakrit Yoophoon (Hnuy)</p>
						<p className='EngFont'>Software Engineer</p>
					</div>
					<div className='text-center'>
						<img src={SER2} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5 EngFont'>Natthanan Morasuk (Golf)</p>
						<p className='EngFont'>Software Engineer</p>
					</div>
					<div className='text-center'>
						<img src={TECH} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5 EngFont'>Akaradad Viriyamataloj (Mai)</p>
						<p className='EngFont'>Technical Specialist</p>
					</div>
					<div className='text-center'>
						<img src={SALE} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5 EngFont'>Nutdanai Pulkert (Few)</p>
						<p className='EngFont'>Sale Software</p>
					</div>
					<div className='text-center'>
						<img src={DEV} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5 EngFont'>Chutimun Torntranon (Jeff)</p>
						<p className='EngFont'>Junior Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BitSoftTeam;
