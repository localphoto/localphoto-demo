import PlacesMap from "@/components/PlacesMap";
import "mapbox-gl/dist/mapbox-gl.css";

export default async function PlacesPage() {
  return (
    <div className="flex -mt-10 h-screen flex-grow">
      <PlacesMap mapboxAccessToken={process.env?.MAPBOX_ACCESS_TOKEN!} />
    </div>
  );
}
