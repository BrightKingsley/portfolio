import React from "react";
import Button from "../Button";
import { Calendar } from "../Icons/Icons";
import Image from "next/image";

export default function Card({ img, variant, host }) {
	return variant === "ticket" ? (
		<div className="space-y-2 px-2 py-4  rounded-lg bg-[#f2f2f2] inline-block ">
			<div
				className={`relative overflow-clip mx-auto rounded-md w-full h-52 md:w-[23rem] md:h-68 ${
					img === "spin" ? "bg-ticketSpin" : "bg-ticket777"
				}  bg-cover bg-center`}
			>
				<div className="absolute  w-full top-1/2 rounded-full items-center mx-auto text-center ">
					<p className="uppercase spinWheelText">Spin The Wheel</p>
				</div>
				<Image src={img} alt="" fill className="w-full h-full object-cover" />
			</div>
			<div className="flex flex-col px-2 space-y-3  ">
				<div className="flex justify-between gap-4 items-center">
					<p className="text-gray-400">
						Number of players:{" "}
						<span className="font-bold text-gray-500">1.1k</span>
					</p>
					<p className="text-gray-400">
						<span className="w-4 h-4 inline-block mr-1">
							<Calendar />
						</span>{" "}
						Date:{" "}
						<span className="font-bold text-gray-500">22/02/23</span>
					</p>
				</div>
				<Button color="green">Buy ticket</Button>
			</div>
		</div>
	) : (
		<div className="space-y-2 px-2 py-4 rounded-lg shadow-card bg-white inline-block">
			<div className="relative bg-purple-700 overflow-clip rounded-md w-64 h-64 md:w-80 md:h-68">
				<div className="absolute top-4 rounded-full flex items-center w-4/5 mx-auto  py-1 justify-between gap-4 border-[1px] left-0 right-0 border-white px-2 text-white">
					<p className="text-white text-sm">Host: Verified_User01</p>
					<div className="rounded-full h-8 w-8 overflow-clip">
						<Image
							src={host}
							alt=""
							className="w-full h-full object-cover bg-drawrGreen"
						/>
					</div>
				</div>
				<img src={img} alt="" className="w-full h-full object-cover" />
			</div>
			<div className="flex flex-col px-2 space-y-3  bg-white">
				<p className="text-gray-400">
					Number of players:{" "}
					<span className="font-bold text-gray-600">1.1k</span>
				</p>
				<p className="text-gray-400">
					Game:{" "}
					<span className="font-bold text-gray-600">
						777 spin{" "}
						<div className="w-4 h-4 inline-block pt-1">
							<Image
								src=""
								alt=""
								fill
								className="w-full h-full object-cover "
							/>
						</div>
					</span>
				</p>
				<Button color="green">Join game</Button>
			</div>
		</div>
	);
}
