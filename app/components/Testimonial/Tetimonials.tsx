import React from "react";
import { Twitter } from "../Icons/Icons";

export default function Testimonial({ text, name, tag, img }) {
	return (
		<div className="rounded-xl bg-white p-6 h-full md:w-96 space-y-4">
			<div className="flex items-center">
				<div className="rounded-full overflow-clip w-12 h-12">
					<img src={img} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="flex-1 flex flex-col ml-2">
					<p>{name}</p>
					<small className="text-gray-400 text-xs">@{tag}</small>
				</div>
				<span className="w-8 h-8">
					<Twitter />
				</span>
			</div>
			<p className="text-sm">{text}</p>
		</div>
	);
}
