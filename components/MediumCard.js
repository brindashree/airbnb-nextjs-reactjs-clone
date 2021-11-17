import Image from "next/image";

export default function MediumCard({ img, title }) {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out bg-gray-100 rounded-xl shadow-sm">
			<div className="relative h-80 w-80">
				<Image src={img} layout="fill" className="rounded-xl" />
			</div>
			<h3 className="m-3 text-lg">{title}</h3>
		</div>
	);
}
