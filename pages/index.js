import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import london from "../images/london.jpg";
import york from "../images/york.png";
import cardiff from "../images/cardiff.png";
import berkenhead from "../images/berkenhead.jpg";
import Newquay from "../images/Newquay.png";
import hove from "../images/hove.jpg";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ cardData }) {
	return (
		<div>
			<Head>
				<title>Airbnb Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16 bg-white shadow-lg m-5">
				<section>
					<h2 className="text-3xl font-semibold py-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
						<SmallCard
							img={london}
							distance="45-minute drive"
							location="London"
						/>
						<SmallCard img={york} distance="4-hour drive" location="York" />
						<SmallCard
							img={cardiff}
							distance="45-minute drive"
							location="Cardiff"
						/>
						<SmallCard
							img={berkenhead}
							distance="4.5-hour drive"
							location="Birkenhead"
						/>
						<SmallCard
							img={Newquay}
							distance="6-hour drive"
							location="Newquay"
						/>
						<SmallCard img={hove} distance="2-hour drive" location="Hove" />

						<SmallCard
							img="https://links.papareact.com/1to"
							distance="4.5-hour drive"
							location="Manchester"
						/>
						<SmallCard
							img="https://links.papareact.com/40m"
							distance="4.5-hour drive"
							location="Liverpool"
						/>
					</div>
				</section>
				<section>
					<h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
						{cardData?.map((item, i) => (
							<MediumCard key={i} img={item.img} title={item.title} />
						))}
					</div>
				</section>
				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb"
					buttonText="Get Inspired"
				/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json()
	);
	return {
		props: {
			cardData,
		},
	};
}
