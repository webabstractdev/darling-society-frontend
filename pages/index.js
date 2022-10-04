import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Index() {
	return (
		<div>
			<Head>
				<title>Darling Society</title>
				<meta name="description" content="Darling Society" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script src="//embed.typeform.com/next/embed.js"></Script>

			<div className="mt-[51px]">
				<div className="lg:hidden">
					<Image
						src="/header_slow.gif"
						layout="responsive"
						width="344"
						height="240"
						alt="darling"
					/>
				</div>
				<div className="hidden lg:block">
					<Image
						src="/header_slow.gif"
						layout="responsive"
						width="1290"
						height="900"
						alt="darling"
					/>
				</div>

				<div className="px-4 lg:p-0">
					<div className="mt-16 grid gap-4 lg:p-0 lg:mt-[160px] lg:grid-cols-2 lg:gap-7 lg:max-w-screen-xl lg:mx-auto">
						<div className="grid items-center relative bg-mission-1 bg-no-repeat bg-cover w-auto h-[345px] lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif italic leading-[44px] text-white text-4xl text-center lg:text-5xl lg:leading-[64px]">
								Request
								<br />
								Informational
								<br />
								Deck
							</h2>

							<a
								href="https://darlingmagazine.app.box.com/s/mx4i43gyzd7b2bvigznqkzf1wp4s50zn"
								target="_blank"
								rel="noreferrer"
								className="absolute text-center bottom-10 left-0 right-0 w-[173px] mx-auto bg-base-black text-white py-2 lg:bottom-20"
							>
								CLICK HERE
							</a>
						</div>

						<div className="grid items-center relative bg-mission-2 bg-no-repeat bg-cover w-auto h-[345px] lg:m-0 lg:w-[630px] lg:h-[630px]">
							<h2 className="font-serif italic leading-[44px] text-white text-4xl text-center lg:text-5xl lg:leading-[64px]">
								Apply to Be An
								<br />
								Ambassador
							</h2>

							<button
								data-tf-popup="dLY0FaeI"
								data-tf-iframe-props="title=Ambassador Application"
								data-tf-medium="snippet"
								className="absolute text-center bottom-10 left-0 right-0 w-[173px] mx-auto bg-base-black text-white py-2 lg:bottom-20"
							>
								CLICK HERE
							</button>
						</div>
					</div>
				</div>

				<div className="mt-16 lg:hidden">
					<Image
						src="/moodboard-mobile.png"
						layout="responsive"
						width="345"
						height="278"
						alt="darling"
					/>
				</div>
				<div className="mt-[160px] hidden lg:block">
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
							className="font-bold hover:opacity-70 duration-200"
						>
							info@darlingsociety.com
						</a>
					</p>
				</div>

				<div className="mt-[80px] mb-10 p-4 lg:flex lg:justify-between lg:max-w-screen-xl lg:mx-auto xl:p-0 lg:mt-[200px] lg:mb-[100px]">
					<div>
						<p className="font-bold text-base-black">ABOUT DARLING</p>
						<div className="grid gap-3 my-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://blog.darlingmagazine.org/mission/"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								OUR MISSION
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://blog.darlingmagazine.org/jobs-and-internships/"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								JOBS + INTERNSHIPS
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/pages/terms-conditions"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								TERMS & CONDITIONS
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/pages/returns-and-exchanges-policy"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								RETURN POLICY
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/pages/privacy-policy"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								PRIVACY POLICY
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://blog.darlingmagazine.org/contact/"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								CONTACT US
							</a>
						</div>
					</div>

					<div>
						<p className="font-bold text-base-black">SHOP</p>
						<div className="grid gap-3 my-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/collections/mirror-decals"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								MIRROR DECALS
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/collections/home"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								HOME DECOR
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/collections/paper-good"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								PAPER GOODS
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/collections/games"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								GAMES + CRAFTS
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://shop.darlingmagazine.org/blogs/darling-blog"
								className="block text-sm text-gray-500 hover:opacity-70 hover:underline duration-200"
							>
								DARLING SOCIETY
							</a>
						</div>
					</div>

					<div>
						<p className="font-bold text-base-black">KEEP IN TOUCH</p>
						<div className="flex gap-4 items-center mt-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.facebook.com/darlingmagazine"
								className="block hover:opacity-70 duration-200"
							>
								<Image
									src="/facebook.svg"
									alt="logo"
									layout="fixed"
									width="26"
									height="26"
								/>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/darling/"
								className="block hover:opacity-70 duration-200"
							>
								<Image
									src="/instagram.svg"
									alt="logo"
									layout="fixed"
									width="26"
									height="26"
								/>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.pinterest.com/darlingmagazine/"
								className="block hover:opacity-70 duration-200"
							>
								<Image
									src="/pinterest.svg"
									alt="logo"
									layout="fixed"
									width="26"
									height="26"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
