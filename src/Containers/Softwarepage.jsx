import React from 'react';
import dashboard from '../icons/dashboard.png';
import paperless from '../icons/paperless.png';
import realTime from '../icons/real-time.png';
import filter from '../icons/filter.png';
import cloud from '../icons/cloud.png';
import cheap from '../icons/loss1.png';
function Softwarepage() {
	return (
		<div className='w-full py-16 px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid gap-4'>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-3 ThaiFont'>
					ซอฟต์แวร์ของเราบริการด้านไหนบ้าง?
				</h1>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-3 EngFont'>
					Software as a service
				</h1>
				<div className='grid md:grid-cols-3 gap-12'>
					<div className='text-center shrink'>
						<img src={dashboard} alt='' />
						<h1 className='p-3 EngFont text-xl'>Dashboard System</h1>
						<h2 className='p-3 ThaiFont'>ระบบแดชบอร์ด</h2>
					</div>
					<div className='text-center shrink'>
						<img src={paperless} alt='' />
						<h1 className='p-3 EngFont text-xl'>Paperless</h1>
						<h2 className='p-3 ThaiFont'>
							ลดการใช้กระดาษ
							<br />
							อย่างไม่จำเป็นในองค์กร
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={realTime} alt='' />
						<h1 className='p-2 EngFont text-xl'>Real-time</h1>
						<h2 className='p-2 ThaiFont'>
							สามารถ <span className='EngFont'>Monitor</span> และ{' '}
							<span className='EngFont'>Control</span> <br />
							สายการผลิตได้ถูกต้องรวดเร็ว
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={filter} alt='' />
						<h1 className='p-2 EngFont text-xl'>Search and Filter</h1>
						<h2 className='p-2 ThaiFont'>
							สืบค้นข้อมูลที่มากมาย
							<br />
							ด้วยระบบ <span className='EngFont'>Search and Filter</span>
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={cloud} alt='' />
						<h1 className='p-2 EngFont text-xl'>Cloud Based Technology</h1>
						<h2 className='p-2 ThaiFont'>
							นำข้อมูลจากการเก็บแบบ <span className='EngFont'>Local</span>{' '}
							<br />
							มาจัดเก็บใน <span className='EngFont'>
								Cloud based Service
							</span>{' '}
							แทน
						</h2>
					</div>
					<div className='text-center shrink'>
						<img src={cheap} alt='' />
						<h1 className='p-2 EngFont text-xl'>Subscription-based Model</h1>
						<h2 className='p-2 ThaiFont'>
							ระบบจ่ายรายเดือน <br></br>ในราคาที่เหมาะสม
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Softwarepage;
