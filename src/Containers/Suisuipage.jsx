import React from 'react';
import Dashboard from '../assets/dashboard.webp';
function Suisuipage() {
	return (
		<div className='w-full py-16 px-4 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
				<img className='dashboard hover:shadow-2xl ' src={Dashboard} alt='/' />
				<div className='flex flex-col justify-center'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont'>
						SUISEI Production
					</h1>
					<p className='text-[#8EACC1] font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont'>
						Control System{' '}
					</p>
					<p className='text-2xl font-light text-black p-3 ThaiFont'>
						&nbsp;&nbsp;&nbsp;ใช้ในสายการผลิตอุตสาหกรรมที่ก้าวสู่ ยุคอุตสาหกรรม
						4.0 เข้ามาสนับสนุนการพัฒนาโรงงานให้เป็น{' '}
						<span className='EngFont'>Smart Factory</span>
						&nbsp;โดยมุ่งเน้นการเชื่อมต่อข้อมูลแบบ{' '}
						<span className='EngFont'>Realtime</span> และสามารถ{' '}
						<span className='EngFont'>Monitor and Control</span> &nbsp;
						สายการผลิตได้ถูกต้องและรวดเร็ว
					</p>
				</div>
			</div>
		</div>
	);
}

export default Suisuipage;
