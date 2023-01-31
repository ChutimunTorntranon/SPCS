import React from 'react';
import Realtime from '../icons/real-time1.png';
import img1 from '../gallery/Realtime/Real0.png';
import img2 from '../gallery/Realtime/Real1.png';
import img3 from '../gallery/Realtime/Real2.png';
import img4 from '../gallery/Realtime/Real3.png';

import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
function Realtimepage() {
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
		<div>
			<div className='mx-auto container'>
				<div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto'>
					<div className='h-[400px] w-[400px] sm:h-[500px] sm:w-[450px] col-span-1 my-auto lg:h-[600px] lg:w-[800px] m-auto py-16 px-4 relative group'>
						<div
							style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
							className='w-full h-full bg-center bg-cover duration-500'
						></div>

						<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl round-full p-2 bg-black/20 text-white cursor-pointer'>
							<BsChevronCompactLeft onClick={prevSlide} size={30} />
						</div>

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
					<div className='col-span-1 flex flex-col w-[450px] mx-auto text-center'>
						<img className='w-[400px] mx-auto' src={Realtime} alt='/' />
						<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black p-3 EngFont'>
							Real-time
						</h1>
						<p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl p-3 EngFont'>
							Remote-Update{' '}
						</p>
						<p className='text-xl font-light text-black md:text-2xl sm:text-xl p-3 ThaiFont'>
							มุ่งเน้นการเชื่อมต่อข้อมูลแบบ{' '}
							<span className='EngFont'>Real-Time</span> และสามารถ{' '}
							<span className='EngFont'>Monitor and Control</span>
							สายการผลิตได้ถูกต้องและรวดเร็ว
							รับข้อมูลและข่าวสารได้จากทุกที่รวมถึงแสดงผลการวัดประสิทธิผล
							โดยรวมของเครื่องจักร{' '}
							<span className='EngFont'>
								(OEE - Overall Eqiupment Effectiveness)
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Realtimepage;
