import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";

export default function Index() {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}"></span>`;
		},
	};

	return (
		<div>
			<Head>
				<title>Darling Society</title>
				<meta name="description" content="Darling Society" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto">
				<div className="m-4 bg-bg-mobile bg-no-repeat bg-cover lg:bg-bg-desktop">
					<div className="pt-[150px] w-[181px] mx-auto lg:w-[385px] lg:pt-[260px]">
						<Image
							src="/logo.svg"
							layout="responsive"
							alt="logo"
							width="181"
							height="60"
						/>
					</div>

					<h2 className="font-serif text-white text-2xl text-center pb-[200px] lg:text-7xl lg:pb-[290px]">
						Launching Spring 2023
					</h2>
				</div>

				<div>
					<h3 className="text-base-black font-serif text-4xl text-center mt-16 lg:mt-[160px] lg:text-5xl">
						Hi friend!
					</h3>

					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 px-11 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						I have something I&apos;ve been SO eager to share with you as an
						insider of the Darling community! As someone who shares a love for
						uplifting women, it’s only natural that YOU would be the first to
						know what myself and the Darling team have been dreaming up over the
						past 10 months.
					</p>
					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 px-11 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						I am overjoyed to announce that a long term vision of our company is
						coming true. We are launching a{" "}
						<span className="font-bold">
							Darling clothing collection in 2023
						</span>{" "}
						along with the expansion of home goods! We would love for you to be
						a part of it through our new ambassador program called the Darling
						Society.
					</p>
					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 px-11 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						I am overjoyed to announce that a long term vision of our company is
						coming true. We are launching a Darling clothing collection in 2023
						along with the expansion of home goods! We would love for you to be
						a part of it through our new ambassador program called the Darling
						Society.
					</p>
				</div>

				<div>
					<h3 className="text-base-black font-serif text-4xl text-center mt-16 lg:text-5xl">
						Mission
					</h3>

					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 px-11 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						Ambassadors are women that want to bring the Darling mission to
						their community and are trained to help women shift negative mental
						narratives around themselves and their bodies.
					</p>

					<div className="mt-16 lg:mt-[160px] lg:grid lg:grid-cols-2 lg:gap-7 lg:max-w-screen-xl lg:mx-auto">
						<div className="grid items-center m-4 bg-mission-1 bg-no-repeat bg-cover lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif text-white text-2xl text-center py-[150px] lg:text-5xl">
								International peak
							</h2>
						</div>

						<div className="grid items-center m-4 bg-mission-2 bg-no-repeat bg-cover lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif text-white text-2xl text-center py-[150px] lg:text-5xl">
								Apply here
							</h2>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-base-black font-serif text-4xl text-center mt-16 leading-[46px]  lg:text-5xl lg:leading-[61px] lg:mt-[160px]">
						Spring 2023
						<br className="lg:hidden" /> Essentials
					</h3>

					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 px-11 lg:w-[750px] lg:text-center lg:mx-auto  lg:text-base lg:leading-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>

					<Swiper
						slidesPerView={1}
						centeredSlides={true}
						spaceBetween={0}
						pagination={pagination}
						modules={[Pagination]}
						grabCursor={true}
						className="mt-10 lg:mt-20"
					>
						<SwiperSlide className=" grid justify-center">
							<div className="relative w-[283px] h-[439px] lg:w-[520px] lg:h-[660px]">
								<Image src="/essentials-1.png" layout="fill" alt="fashion" />
							</div>
						</SwiperSlide>
						<SwiperSlide className=" grid justify-center">
							<div className="relative w-[283px] h-[439px] lg:w-[520px] lg:h-[660px]">
								<Image src="/essentials-2.png" layout="fill" alt="fashion" />
							</div>
						</SwiperSlide>
						<SwiperSlide className=" grid justify-center">
							<div className="relative w-[283px] h-[439px] lg:w-[520px] lg:h-[660px]">
								<Image src="/essentials-3.png" layout="fill" alt="fashion" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="mt-16 px-4 grid gap-6 lg:mt-[72px] lg:grid lg:grid-cols-2 lg:gap-8 lg:w-[1100px] lg:mx-auto">
					<div className="bg-butter text-center py-16">
						<p className="text-lg text-base-black font-serif">
							If this is making you rise your hand
							<br />
							to request ALL the details
						</p>
						<button className="mt-8 bg-base-black py-4 px-10 text-white font-sans">
							Click here
						</button>
					</div>

					<div className="bg-eggplant text-center py-16">
						<p className="text-lg text-base-black font-serif">
							If this is making you rise your hand
							<br />
							to request ALL the details
						</p>
						<button className="mt-8 bg-base-black py-4 px-10 text-white font-sans">
							Click here
						</button>
					</div>
				</div>

				<div className="px-4  mt-16 lg:mt-[160px]">
					<h3 className="text-base-black font-serif text-4xl text-center leading-[46px] lg:text-5xl">
						FAQ
					</h3>

					<div className="grid gap-2 mt-6 lg:mt-11 lg:w-[1000px] lg:mx-auto">
						<div
							className=" bg-base-gray p-6 cursor-pointer"
							onClick={() => setOpen1(!open1)}
						>
							<div className="flex justify-between">
								<p className="font-sans text-sm font-bold text-base-black lg:text-base">
									Lorem ipsum dolor sit amet?
								</p>
								{open1 ? (
									<Image
										src="/chevron-up.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								) : (
									<Image
										src="/chevron-down.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								)}
							</div>
							{open1 && (
								<p className="font-sans text-sm font-light text-base-black leading-6 mt-3 lg:text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Placerat est commodo, leo cum. Suspendisse nibh convallis sem
									duis. Nunc eu imperdiet massa ultrices pretium ante pulvinar.
								</p>
							)}
						</div>

						<div
							className=" bg-base-gray p-6 cursor-pointer"
							onClick={() => setOpen2(!open2)}
						>
							<div className="flex justify-between">
								<p className="font-sans text-sm font-bold text-base-black lg:text-base">
									Lorem ipsum dolor sit amet?
								</p>
								{open2 ? (
									<Image
										src="/chevron-up.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								) : (
									<Image
										src="/chevron-down.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								)}
							</div>
							{open2 && (
								<p className="font-sans text-sm font-light text-base-black leading-6 mt-3 lg:text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Placerat est commodo, leo cum. Suspendisse nibh convallis sem
									duis. Nunc eu imperdiet massa ultrices pretium ante pulvinar.
								</p>
							)}
						</div>

						<div
							className=" bg-base-gray p-6 cursor-pointer"
							onClick={() => setOpen3(!open3)}
						>
							<div className="flex justify-between">
								<p className="font-sans text-sm font-bold text-base-black lg:text-base">
									Lorem ipsum dolor sit amet?
								</p>
								{open3 ? (
									<Image
										src="/chevron-up.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								) : (
									<Image
										src="/chevron-down.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								)}
							</div>
							{open3 && (
								<p className="font-sans text-sm font-light text-base-black leading-6 mt-3 lg:text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Placerat est commodo, leo cum. Suspendisse nibh convallis sem
									duis. Nunc eu imperdiet massa ultrices pretium ante pulvinar.
								</p>
							)}
						</div>

						<div
							className=" bg-base-gray p-6 cursor-pointer"
							onClick={() => setOpen4(!open4)}
						>
							<div className="flex justify-between">
								<p className="font-sans text-sm font-bold text-base-black lg:text-base">
									Lorem ipsum dolor sit amet?
								</p>
								{open4 ? (
									<Image
										src="/chevron-up.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								) : (
									<Image
										src="/chevron-down.svg"
										layout="fixed"
										width="24"
										height="24"
										alt="chevron"
									/>
								)}
							</div>
							{open4 && (
								<p className="font-sans text-sm font-light text-base-black leading-6 mt-3 lg:text-base">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Placerat est commodo, leo cum. Suspendisse nibh convallis sem
									duis. Nunc eu imperdiet massa ultrices pretium ante pulvinar.
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="bg-base-black py-10 px-12 mt-20 lg:mt-[160px]">
					<div className=" lg:w-[1000px] lg:mx-auto">
						<div className="lg:grid lg:grid-cols-2 lg:gap-36">
							<div>
								<h3 className="text-white font-serif text-2xl lg:text-3xl lg:leading-[44px]">
									Darling we’re so excited to get to know you!
								</h3>
								<p className="text-sm font-sans text-white mt-4 lg:text-base">
									Please fill out the following application thoughtfully and
									authentically.
								</p>
								<button className="bg-butter w-full py-4 text-base-black font-sans mt-4 lg:w-[200px]">
									Fill out the form
								</button>
							</div>

							<div className="text-sm text-white font-sans flex justify-between mt-8 leading-10 lg:m-0 lg:justify-start lg:gap-28">
								<div>
									<p>Home</p>
									<p>Our Story</p>
									<p>Become A Darling</p>
									<p>Ambassador</p>
								</div>
								<div>
									<p>Cookie Policy</p>
									<p>Privacy Policy</p>
								</div>
							</div>
						</div>

						<div className="flex gap-6 mt-10 justify-center lg:justify-start">
							<Image
								src="/fb.svg"
								layout="fixed"
								width="24"
								height="24"
								alt="fb"
							/>
							<Image
								src="/twt.svg"
								layout="fixed"
								width="24"
								height="24"
								alt="twitter"
							/>
							<Image
								src="/linked.svg"
								layout="fixed"
								width="24"
								height="24"
								alt="linkedin"
							/>
							<Image
								src="/ig.png"
								layout="fixed"
								width="24"
								height="24"
								alt="instagram"
							/>
						</div>

						<div className="mt-10 flex gap-4 items-center justify-center lg:pb-[70px] lg:mt-14">
							<Image
								src="/logo.svg"
								layout="fixed"
								alt="logo"
								width="68"
								height="22"
							/>
							<p className="text-white font-serif font-light italic text-sm">
								- All rights reservedm 2022
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
