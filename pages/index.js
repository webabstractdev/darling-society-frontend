import Head from "next/head";
import Image from "next/image";

export default function Index() {
	return (
		<div>
			<Head>
				<title>Darling Society</title>
				<meta name="description" content="Darling Society" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto">
				<div className="px-4 mt-10 lg:hidden">
					<Image
						src="/header.gif"
						layout="responsive"
						width="344"
						height="240"
						alt="darling"
					/>
				</div>
				<div className="max-w-[1280px] mx-auto mt-10 hidden lg:block">
					<Image
						src="/header.gif"
						layout="responsive"
						width="1290"
						height="900"
						alt="darling"
					/>
				</div>

				<div className="px-4 lg:p-0">
					<h3 className="text-base-black font-serif text-4xl text-center mt-16 lg:mt-[160px] lg:text-5xl">
						Hi friend!
					</h3>

					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						I have something I&apos;ve been SO eager to share with you as an
						insider of the Darling community! As someone who shares a love for
						uplifting women, it’s only natural that YOU would be the first to
						know what myself and the Darling team have been dreaming up over the
						past 10 months.
						<br />
						<br />I am overjoyed to announce that a long term vision of our
						company is coming true. We are launching a{" "}
						<span className="font-bold">
							Darling clothing collection in 2023
						</span>{" "}
						along with the expansion of home goods! We would love for you to be
						a part of it through our new ambassador program called the Darling
						Society.
						<br />
						<br />I am overjoyed to announce that a long term vision of our
						company is coming true. We are launching a Darling clothing
						collection in 2023 along with the expansion of home goods! We would
						love for you to be a part of it through our new ambassador program
						called the Darling Society.
					</p>
				</div>

				<div className="px-4 lg:p-0">
					<h3 className="text-base-black font-serif text-4xl text-center mt-16 lg:text-5xl">
						Mission
					</h3>

					<p className="text-sm text-base-black leading-6 font-sans font-light mt-6 lg:w-[630px] lg:mx-auto lg:text-base lg:leading-8">
						Ambassadors are women that want to bring the Darling mission to
						their community and are trained to help women shift negative mental
						narratives around themselves and their bodies.
					</p>

					<div className="mt-16 grid gap-4 lg:p-0 lg:mt-[160px] lg:grid-cols-2 lg:gap-7 lg:max-w-screen-xl lg:mx-auto">
						<div className="grid items-center relative bg-mission-1 bg-no-repeat bg-cover w-auto h-[345px] lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif italic leading-[44px] text-white text-4xl text-center lg:text-5xl lg:leading-[64px]">
								Request
								<br />
								Informational
								<br />
								Deck
							</h2>
							<button className="absolute bottom-10 left-0 right-0 w-[173px] mx-auto bg-base-black text-white py-2 lg:bottom-20">
								CLICK HERE
							</button>
						</div>

						<div className="grid items-center relative bg-mission-2 bg-no-repeat bg-cover w-auto h-[345px] lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif italic leading-[44px] text-white text-4xl text-center lg:text-5xl lg:leading-[64px]">
								Apply to Be An
								<br />
								Ambassador
							</h2>
							<button className="absolute bottom-10 left-0 right-0 w-[173px] mx-auto bg-base-black text-white py-2 lg:bottom-20">
								CLICK HERE
							</button>
						</div>
					</div>
				</div>

				<div className="px-4 mt-16 lg:hidden">
					<Image
						src="/moodboard-mobile.png"
						layout="responsive"
						width="345"
						height="278"
						alt="darling"
					/>
				</div>
				<div className="mt-16 hidden lg:block max-w-[1280px] mx-auto">
					<Image
						src="/moodboard-desktop.png"
						layout="responsive"
						width="1290"
						height="1037"
						alt="darling"
					/>
				</div>

				<div className="mt-20 lg:mt-[160px]">
					<h3 className="text-base-black font-serif font-bold text-5xl italic text-center lg:text-6xl">
						Have questions?
					</h3>
					<p className="mt-6 text-base-black text-sm font-sans text-center lg:text-base">
						Email us at{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="mailto:info@darlingsociety.com"
							className="font-bold"
						>
							info@darlingsociety.com
						</a>
					</p>
				</div>

				<div className="bg-base-black py-10 px-4 mt-20 lg:mt-[160px] lg:py-20">
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
