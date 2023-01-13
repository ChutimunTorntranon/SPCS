import React from 'react';
import Filter from '../icons/filter2.png';
import gifFilter from '../assets/filtergif.gif';
function Filterpage() {
	return (
		<div className='bg-white container mx-auto py-10'>
			<div className='w-full container grid md:grid-cols-2 sm:grid-cols-1 px-20'>
				<div className='flex flex-col justify-center w-[450px]'>
					<img className='w-[450px]' src={Filter} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Search and Filter
					</h1>

					<p className='text-2xl font-light text-black'>
						ข้อมูลสายการผลิตที่มีมากมาย สามารถสืบค้นหาข้อมูลการผลิตด้วยระบบ
						Search and Filter
						เพื่อนำข้อมูลสายการผลิตมาสู่กระบวนการวิเคราะห์ปัญหาได้อย่างรวดเร็ว
					</p>
				</div>
				<div className='max-w-[1000px]'>
					<img src={gifFilter} alt='' className='w-[1000px] h-[600px]'></img>
				</div>
			</div>
		</div>
	);
}

export default Filterpage;
