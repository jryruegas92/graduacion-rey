"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pins = [
  {
    id: 1,
    title: "Mi casa",
    emoji: "🏠",
    lat: 37.8767,
    lng: -122.2604,
    note: "2486 Hilgard Ave · punto de referencia",
  },
  {
    id: 2,
    title: "Greek Theatre",
    emoji: "🎓",
    lat: 37.8736,
    lng: -122.254,
    note: "Ceremonia · 2:00–4:00 PM",
  },
  {
    id: 3,
    title: "Haas Courtyard",
    emoji: "🥂",
    lat: 37.872,
    lng: -122.2536,
    note: "Recepción · 4:00–6:00 PM",
  },
  {
    id: 4,
    title: "Point San Pablo Harbor",
    emoji: "🌅",
    lat: 37.9645,
    lng: -122.418,
    note: "Family Welcome · 5:00–9:00 PM",
  },
];

function buildIcon(p) {
  return L.divIcon({
    className: "rey-pin",
    html: `
      <div style="
        position: relative;
        width: 38px;
        height: 38px;
      ">
        <div style="
          background: #003262;
          width: 38px;
          height: 38px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #FDB515;
          box-shadow: 0 6px 12px rgba(0,0,0,.35);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="
            transform: rotate(45deg);
            color: #FDB515;
            font-weight: 700;
            font-size: 14px;
            font-family: system-ui, sans-serif;
          ">${p.id}</span>
        </div>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -36],
  });
}

export default function PinMap() {
  // Centered between Berkeley and Point San Pablo, with a zoom that fits both.
  const center = [37.92, -122.34];

  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: "480px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={buildIcon(p)}>
          <Popup>
            <strong>
              {p.emoji} {p.title}
            </strong>
            <br />
            <span style={{ fontSize: "12px", color: "#444" }}>{p.note}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
