import React from 'react';
import Filter from '../icons/filter2.png';
import gifFilter from '../assets/filtergif.gif';
function Filterpage() {
	return (
		<div className='w-full bg-white py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<div className='flex flex-col justify-center'>
					<img className='w-[400px]' src={Filter} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Search and Filter
					</h1>
					{/* <p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						and Filter{' '}
					</p> */}
					<p className='text-2xl font-light text-black'>
						ข้อมูลสายการผลิตที่มีมากมาย สามารถสืบค้นหาข้อมูลการผลิตด้วยระบบ
						Search and Filter
						เพื่อนำข้อมูลสายการผลิตมาสู่กระบวนการวิเคราะห์ปัญหาได้อย่างรวดเร็ว
					</p>
				</div>
				<div className='max-w-[800px]'>
					<img
						src={gifFilter}
						alt=''
						className='w-[800px] h-[400px] mt-[10%]'
					></img>
				</div>
			</div>
		</div>
	);
}

export default Filterpage;
