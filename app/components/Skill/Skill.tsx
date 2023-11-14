import { motion } from "framer-motion";
import rewards from "../../../assets/landing/Players win cool rewards illustration.png";
import funAndGames from "../../../assets/landing/Fun and exciting games illustration.png";
import Image from"next/image

import { Wheel3d, Button } from "..";
import Media from "react-media";
import { SM } from "@/constants/mediaQueries";

export default function Skill() {
	return (
		<>
			<div className="flex w-full text-center md:text-left flex-col md:flex-row items-center gap-24 pt-32 py-20 md:py-24 px-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ amount: 0.5 }}
					transition={{ duration: 0.3 }}
					className="flex-1"
				>
					<Image
						src={rewards}
						alt=""
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<div className="flex-1 space-y-10">
					<h2 className="gradientText text-5xl leading-[4rem] font-bold">
						players win cool rewards
					</h2>
					<motion.p
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ amount: 1 }}
						transition={{ duration: 1 }}
						className="text-lg"
					>
						Win amazing prizes with our customizable games -Spin the Wheel
						or 777 Spin. Your customers can unlock cool rewards like
						discounts, free products, or exclusive experiences. Sign up
						now to host your own raffle draws with branded prizes and
						boost engagement with your brand
					</motion.p>
					<div className="w-fit mx-auto md:mx-0">
						<Button animate color="purple" arrow={"white"}>
							<p className="text-white text-lg">Join raffle draws</p>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
