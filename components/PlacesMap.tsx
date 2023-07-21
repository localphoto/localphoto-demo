"use client";

import Map, { Source, Layer, Marker } from "react-map-gl";
import type { CircleLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const markers = [
  { id: "16", path: "viewing.jpg", longitude: -74.0445, latitude: 40.6892 },
  { id: "6", path: "framing.jpg", longitude: -77.0365, latitude: 38.8814 },
  { id: "19", path: "outlined.jpg", longitude: -73.5674, latitude: 45.5019 },
  { id: "21", path: "cutting.jpg", longitude: -102.3157, latitude: 46.8839 },
  { id: "5", path: "three.jpg", longitude: 144.9785, latitude: -37.7984 },
  { id: "7", path: "waving.jpg", longitude: -156.7, latitude: 71.2 },
  { id: "18", path: "aloha.jpg", longitude: -157.7055, latitude: 21.2771 },
  { id: "17", path: "kissing.jpg", longitude: -72.4973, latitude: -13.2263 },
  { id: "12", path: "flying.jpg", longitude: 55.1701, latitude: 25.1148 },
  { id: "20", path: "diving.jpg", longitude: -159.5261, latitude: 22.0964 },
  { id: "14", path: "reflecting.jpg", longitude: -118.2115, latitude: 33.9303 },
];

export default function PlacesMap({
  mapboxAccessToken,
}: {
  mapboxAccessToken: string;
}) {
  const router = useRouter();

  return (
    <div className="flex w-full">
      <Map
        mapboxAccessToken={mapboxAccessToken}
        initialViewState={{
          longitude: -79.4,
          latitude: 43.7,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        projection={{ name: "globe" }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            <Link href={`/photos/${marker.id}`}>
              <Image
                alt={marker.path}
                className="rounded-full h-10 w-10 shadow-lg shadow-black/50 border-white border-2 transition will-change-auto hover:scale-125"
                src={`https://d2g3wyw4vlq6n.cloudfront.net/demo/photos/${marker.path}`}
                width={40}
                height={40}
              />
            </Link>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
