import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	//transform searchResults
	const coordinates = searchResults.map((res) => ({
		longitude: res.long,
		latitude: res.lat,
	}));

	const center = getCenter(coordinates);
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});
	return (
		<ReactMapGL
			mapStyle="mapbox://styles/brindashree/ckw4ga1mn7kqz14pay48kqbjf"
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
		>
			{searchResults &&
				searchResults.map((res) => (
					<div key={res.long}>
						<Marker
							longitude={res.long}
							latitude={res.lat}
							offsetLeft={-20}
							offsetTop={-10}
						>
							<p
								onClick={() => setSelectedLocation(res)}
								className="cursor-pointer text-2xl animate-bounce"
							>
								📍
							</p>
						</Marker>
						{selectedLocation.long === res.long && (
							<Popup
								closeOnClick={true}
								latitude={res.lat}
								longitude={res.long}
								onClose={() => setSelectedLocation({})}
							>
								{res.title}
							</Popup>
						)}
					</div>
				))}
		</ReactMapGL>
	);
}

export default Map;
