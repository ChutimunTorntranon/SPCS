import React from 'react';
import CEO from '../team/CEO.png';
import COO from '../team/COO.png';
import CTO from '../team/PBhon.png';
import SER from '../team/Hnuy.png';
import SER2 from '../team/Golf.png';
import SALE from '../team/Few.png';
import DEV from '../team/Jeff.png';
import TECH from '../team/PDong.png';
function BitSoftTeam() {
	return (
		<div className='bg-[#FFFFFF]'>
			<div className='container mx-auto'>
				<div className='text-center font-extrabold underline decoration-sky-500 text-[50px]'>
					BITSOFT TEAM
				</div>
				<div className='grid grid-cols-3 mt-8'>
					<div className='text-center'>
						<img src={CEO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5'>K.Parada Bunnag</p>
						<p>Chief Executive Officer (CEO)</p>
					</div>
					<div className='text-center'>
						<img src={COO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5'>K.Patcharee Bunnag</p>
						<p>Chief Operating Officer (COO)</p>
					</div>
					<div className='text-center'>
						<img src={CTO} alt='' className='mx-auto w-[300px]'></img>
						<p className='mt-5'>K.Bhon Bunnag</p>
						<p>Chief Technology Officer (CTO)</p>
					</div>
				</div>
				<div className='grid grid-cols-5 mt-10 mb-10'>
					<div className='text-center'>
						<img src={SER} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5'>Prakrit Yoophoon (Hnuy)</p>
						<p>Software Engineer</p>
					</div>
					<div className='text-center'>
						<img src={SER2} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5'>Natthanan Morasuk (Golf)</p>
						<p>Software Engineer</p>
					</div>
					<div className='text-center'>
						<img src={TECH} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5'>Kittisak Boonpinyo (Dong)</p>
						<p>Technical Specialist</p>
					</div>
					<div className='text-center'>
						<img src={SALE} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5'>Nutdanai Pulkert (Few)</p>
						<p>Sale Software</p>
					</div>
					<div className='text-center'>
						<img src={DEV} alt='' className='mx-auto w-[200px]'></img>
						<p className='mt-5'>Chutimun Torntranon (Jeff)</p>
						<p>Junior Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BitSoftTeam;
