import React from 'react';
import Dashboard from '../assets/dashboard.webp';
function Suisuipage() {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<img className='dashboard hover:shadow-2xl ' src={Dashboard} alt='/' />
				<div className='flex flex-col justify-center'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						SUISEI Production
					</h1>
					<p className='text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl'>
						Control System{' '}
					</p>
					<p className='text-2xl font-light'>
						ในสายการผลิตอุตสาหกรรมที่ก้าวสู่ ยุคอุตสาหกรรม 4.0 <br></br>
						เข้ามาสนับสนุนการพัฒนาโรงงานให้เป็น Smart Factory <br></br>
						โดยมุ่งเน้นการเชื่อมต่อข้อมูลแบบ Realtime และสามารถ Monitor and
						Control สายการผลิตได้ถูกต้องและรวดเร็ว
					</p>
				</div>
			</div>
		</div>
	);
}

export default Suisuipage;
