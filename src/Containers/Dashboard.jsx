import React from 'react';
import dashboard from '../icons/dashboard2.png';
// import gifDash from '../assets/gitDashboard.gif';
import img1 from '../gallery/DashBoard/Dash1.png';
import img2 from '../gallery/DashBoard/Dash2.png';
import img3 from '../gallery/DashBoard/Dash3.png';
import img4 from '../gallery/DashBoard/Dash4.png';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
function Dashboard() {
	const slides = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className='bg-white container mx-auto py-10'>
			<div className='grid xl:grid-cols-2 sm:grid-cols-1'>
				<div className='flex flex-col justify-center w-[450px]'>
					<img className='w-[450px] mx-auto' src={dashboard} alt='/' />
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
				<div className='lg:-ml-8 lg:h-[600px] lg:w-[800px] mx-auto group sm:w-96 sm:h-72 sm:float-left sm:-ml-1 my-auto'>
					<div
						style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
						// className='xl:w1/2 xl:float-left px-8 lg:w-1/2 lg:float-right'
						className='lg:w-full lg:h-full bg-center bg-cover duration-500 sm:w-[450px] sm:h-[350px]'
					></div>
					{/* Left Arrow */}
					<div className='hidden group-hover:block top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl round-full p-2 bg-black/20 text-white cursor-pointer'>
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>
					{/* Right Arrow */}
					<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl round-full p-2 bg-black/20 text-white cursor-pointer'>
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>

					<div className='flex top-4 justify-center py-2'>
						{slides.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='text-2xl cursor-pointer'
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
