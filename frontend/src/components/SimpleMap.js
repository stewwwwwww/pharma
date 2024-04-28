import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  return (
    <MapContainer
      className="h-[40rem] w-full"
      center={[20.960421567673446, 105.86517159259257]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[20.960421567673446, 105.86517159259257]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default SimpleMap;
