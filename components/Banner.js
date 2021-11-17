import Image from "next/image";
import banner from "../images/Dusk.png";

export default function Banner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]">
			<Image src={banner} layout="fill" objectFit="cover" />
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg font-semibold ">
					Not sure where to go? Perfect.
				</p>
				<button className="bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 text-blue-500">
					I'm flexible
				</button>
			</div>
		</div>
	);
}
