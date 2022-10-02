import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [catOpen1, setCatOpen1] = useState(false);
	const [catOpen2, setCatOpen2] = useState(false);
	const [catOpen3, setCatOpen3] = useState(false);
	const [catOpen4, setCatOpen4] = useState(false);

	const [catOpendesktop, setCatOpendesktop] = useState("");

	return (
		<div className="relative">
			<div className="bg-base-black px-4 py-2 fixed top-0 left-0 w-full z-50">
				<div className="block lg:hidden">
					<div className="grid grid-cols-[auto,auto] items-center justify-between">
						<Image
							src="/menu.svg"
							alt="menu"
							layout="fixed"
							width="28"
							height="28"
							onClick={() => setOpen(!open)}
						/>
						<Image
							src="/logo.svg"
							alt="logo"
							layout="fixed"
							width="100"
							height="35"
						/>
					</div>
				</div>

				<div className="hidden lg:block max-w-screen-xl mx-auto">
					<div className="grid grid-cols-[auto,auto] items-center justify-between">
						<div className="flex items-center gap-8">
							<div className="relative">
								<p
									className="font-bold text-white hover:opacity-70 duration-200 hover:underline cursor-pointer"
									onClick={() => {
										if (catOpendesktop === "magazines") {
											return setCatOpendesktop("");
										}
										setCatOpendesktop("magazines");
									}}
								>
									MAGAZINES
								</p>
								{catOpendesktop === "magazines" && (
									<div
										onMouseLeave={() => setCatOpendesktop("")}
										className="absolute grid gap-4 z-50 top-0 left-0 mt-[38px] bg-white p-4 w-[200px] shadow"
									>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/print"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											ALL MAGAZINES
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/print-magazines"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											PRINT
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/digital"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											DIGITAL
										</a>
									</div>
								)}
							</div>

							<div className="relative">
								<p
									className="font-bold text-white hover:opacity-70 duration-200 hover:underline cursor-pointer"
									onClick={() => {
										if (catOpendesktop === "mirrordecals") {
											return setCatOpendesktop("");
										}
										setCatOpendesktop("mirrordecals");
									}}
								>
									MIRROR DECALS
								</p>
								{catOpendesktop === "mirrordecals" && (
									<div
										onMouseLeave={() => setCatOpendesktop("")}
										className="absolute grid gap-4 z-50 top-0 left-0 mt-[38px] bg-white p-4 w-[200px] shadow"
									>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/mirror-decals"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											ALL MIRROR DECALS
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/custom"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											CUSTOM DECALS
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/mini-decals"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											MINI DECALS
										</a>
									</div>
								)}
							</div>

							<div className="relative">
								<p
									className="font-bold text-white hover:opacity-70 duration-200 hover:underline cursor-pointer"
									onClick={() => {
										if (catOpendesktop === "homegoods") {
											return setCatOpendesktop("");
										}
										setCatOpendesktop("homegoods");
									}}
								>
									HOME GOODS
								</p>
								{catOpendesktop === "homegoods" && (
									<div
										onMouseLeave={() => setCatOpendesktop("")}
										className="absolute grid gap-4 z-50 top-0 left-0 mt-[38px] bg-white p-4 w-[200px] shadow"
									>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/home"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											ALL HOME GOODS
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/games"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											GAMES + CRAFTS
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/home-1"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											HOME
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/mugs"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											MUGS
										</a>
									</div>
								)}
							</div>

							<div className="relative">
								<p
									className="font-bold text-white hover:opacity-70 duration-200 hover:underline cursor-pointer"
									onClick={() => {
										if (catOpendesktop === "papergoods") {
											return setCatOpendesktop("");
										}
										setCatOpendesktop("papergoods");
									}}
								>
									PAPER GOODS
								</p>
								{catOpendesktop === "papergoods" && (
									<div
										onMouseLeave={() => setCatOpendesktop("")}
										className="absolute grid gap-4 z-50 top-0 left-0 mt-[38px] bg-white p-4 w-[200px] shadow"
									>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/paper-good"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											ALL PAPER GOODS
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/art"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											ART
										</a>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://shop.darlingmagazine.org/collections/cards-journals"
											className="block hover:opacity-70 duration-200 hover:underline"
										>
											CARDS + JOURNALS
										</a>
									</div>
								)}
							</div>

							<div>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.darlingmagazine.org"
									className="block font-bold text-white hover:opacity-70 duration-200 hover:underline"
								>
									DARLING MAGAZINE
								</a>
							</div>
						</div>

						<Image
							src="/logo.svg"
							alt="logo"
							layout="fixed"
							width="100"
							height="35"
						/>
					</div>
				</div>

				{open && (
					<div className="text-white fixed bg-base-black w-[310px] mt-[51px] h-full top-0 left-0 z-50 py-6 px-4 overflow-y-auto">
						<div className="flex justify-between items-center">
							<p
								className="font-bold text-base"
								onClick={() => setCatOpen1(!catOpen1)}
							>
								MAGAZINES
							</p>
							<Image
								src="/close.svg"
								alt="close"
								layout="fixed"
								width="28"
								height="28"
								onClick={() => setOpen(false)}
							/>
						</div>
						{catOpen1 && (
							<>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/print"
									className="block text-sm mt-3  pl-2 "
								>
									ALL MAGAZINES
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/print-magazines"
									className="block text-sm mt-3  pl-2"
								>
									PRINT
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/digital"
									className="block text-sm mt-3  pl-2"
								>
									DIGITAL
								</a>
							</>
						)}

						<p
							className="font-bold text-base mt-5"
							onClick={() => setCatOpen2(!catOpen2)}
						>
							MIRROR DECALS
						</p>
						{catOpen2 && (
							<>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/mirror-decals"
									className="block text-sm mt-3  pl-2"
								>
									ALL MIRROR DECALS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/mirror-decals"
									className="block text-sm mt-3  pl-2"
								>
									ALL DECALS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/custom"
									className="block text-sm mt-3  pl-2"
								>
									CUSTOM DECALS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/mini-decals"
									className="block text-sm mt-3  pl-2"
								>
									MINI DECALS
								</a>
							</>
						)}

						<p
							className="font-bold text-base  mt-5"
							onClick={() => setCatOpen3(!catOpen3)}
						>
							HOME GOODS
						</p>
						{catOpen3 && (
							<>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/home"
									className="block text-sm mt-3  pl-2"
								>
									ALL HOME GOODS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/games"
									className="block text-sm mt-3  pl-2"
								>
									GAMES + CRAFTS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/home-1"
									className="block text-sm mt-3  pl-2"
								>
									HOME
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/mugs"
									className="block text-sm mt-3  pl-2"
								>
									MUGS
								</a>
							</>
						)}

						<p
							className="font-bold text-base mt-5"
							onClick={() => setCatOpen4(!catOpen4)}
						>
							PAPER GOODS
						</p>
						{catOpen4 && (
							<>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/paper-good"
									className="block text-sm mt-3  pl-2"
								>
									ALL PAPER GOODS
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/art"
									className="block text-sm mt-3  pl-2"
								>
									ART
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://shop.darlingmagazine.org/collections/cards-journals"
									className="block text-sm mt-3  pl-2"
								>
									CARDS + JOURNALS
								</a>
							</>
						)}

						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.darlingmagazine.org"
							className="block font-bold text-base mt-5"
						>
							DARLING MAGAZINE
						</a>

						<a
							target="_blank"
							rel="noreferrer"
							href="mailto:info@darlingsociety.com"
							className="text-white block text-sm mt-5"
						>
							customerservice@darlingmagazine.org
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
