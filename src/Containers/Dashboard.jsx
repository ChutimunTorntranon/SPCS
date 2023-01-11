import React from 'react';
import dashboard from '../icons/dashboard2.png';
import gifDash from '../assets/gitDashboard.gif';
function Dashboard() {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='w-full container mx-auto grid md:grid-cols-2'>
				<div className='flex flex-col justify-center w-[450px]'>
					<img className='w-[450px]' src={dashboard} alt='/' />
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
						DashBoard
					</h1>
					<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl'>
						Single Pane of Glass{' '}
					</p>
					<p className='text-xl font-light text-black md:text-2xl sm:text-xl'>
						DashBoard ที่ออกแบบเพื่อวิเคราะห์ข้อมูลเชิงลึก <br></br>ด้วย Data
						Visualization เพื่อให้เห็นภาพรวม <br></br>
						แนวโน้มของข้อมูลได้อย่างรวดเร็ว
					</p>
				</div>
				<div className='max-w-[1000px]'>
					<img
						src={gifDash}
						alt=''
						className='w-[1000px] h-[550px] my-auto mt-[5%] '
					></img>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
