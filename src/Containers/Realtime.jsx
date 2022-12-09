import React from 'react';
import Realtime from '../icons/real-time1.png';
import update from '../Carusel Dashborad/realgif.gif';
function Realtimepage() {
	return (
		<div className='w-full bg-white py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<div className='flex flex-col justify-center'>
					<img className='w-[400px]' src={Realtime} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						Real-time
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						Remote-Update{' '}
					</p>
					<p className='text-2xl font-light text-black'>
						มุ่งเน้นการเชื่อมต่อข้อมูลแบบ Real-Time และสามารถ Monitor and
						Control สายการผลิตได้ถูกต้องและรวดเร็ว
						รับข้อมูลและข่าวสารได้จากทุกที่รวมถึงแสดงผลการวัดประสิทธิผล
						โดยรวมของเครื่องจักร (OEE - Overall Eqiupment Effectiveness)
					</p>
				</div>
				<div className='max-w-[800px]'>
					<img
						src={update}
						alt=''
						className='w-[800px] h-[400px] mt-[10%]'
					></img>
				</div>
			</div>
		</div>
	);
}

export default Realtimepage;
