import React from 'react';
import CEO from '../team/Screenshot 2566-01-09 at 15.40.27.png';
import COO from '../team/Screenshot 2566-01-09 at 15.42.18.png';
import CTO from '../team/Bhon-bf213f79082f4f8b367de6d3d63aa9bf.png.webp';
import SER from '../team/322021698_3283942625151822_1852047620413036194_n.jpg';
import SER2 from '../team/64725083_1223629441138482_8674302962467602432_o.jpg';
import SALE from '../team/few.jpg';
import DEV from '../team/136759708_3848254078571096_4978116173305225020_n.jpg';
import TECH from '../team/Screenshot 2566-01-09 at 14.33.15.png';
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
						<img src={CTO} alt='' className='mx-auto w-[285px]'></img>
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
						<p>Technician</p>
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
