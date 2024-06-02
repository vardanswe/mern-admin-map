// Compare.js
import React, { useRef, useState } from "react";
import 'leaflet/dist/leaflet.css';
import { DashboardLayout } from "@/layout";
import { FeatureGroup, GeoJSON, MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import eer from '../GeoJSON/eer.json';
import CustomMarker from "@/components/CustomMarker";

// Function to style GeoJSON regions based on their properties
const getRegionStyle = (feature, highlightedRegion) => {
    let color;
    if (feature.properties.EER13CDO === highlightedRegion) {
        color = "brown";
    } else {
        switch (feature.properties.EER13NM) {
            case "Region1":
                color = "red";
                break;
            case "Region2":
                color = "blue";
                break;
            default:
                color = "green";
        }
    }

    return {
        fillColor: color,
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
    };
};

// Component to handle map clicks
const MapClickHandler = ({ onMapClick }) => {
    useMapEvents({
        click: onMapClick,
    });
    return null;
};

export default function Compare() {
    const mapRef = useRef();
    const [highlightedRegion, setHighlightedRegion] = useState(null);
    const ZOOM_LEVEL = 6;
    const center = { lat: 54.431123, lng: -3.5324434 };

    // Example markers array
    const markers = [
        { position: [54.43, -3.23], status: "status1", popupContent: "Marker 1", region: "02" },
        { position: [53.85, -0.85], status: "status2", popupContent: "Marker 2", region: "03" },
        // Add more markers as needed
    ];

    const handleMarkerClick = (region) => {
        setHighlightedRegion(region);
    };

    const handleMapClick = () => {
        setHighlightedRegion(null);
    };

    return (
        <DashboardLayout>
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: '80vh' }}>
                <FeatureGroup>
                    {eer && <GeoJSON data={eer} style={(feature) => getRegionStyle(feature, highlightedRegion)} />}
                </FeatureGroup>
                {markers.map((marker, idx) => (
                    <CustomMarker
                        key={idx}
                        position={marker.position}
                        status={marker.status}
                        popupContent={marker.popupContent}
                        onClick={() => handleMarkerClick(marker.region)}
                    />
                ))}
                <MapClickHandler onMapClick={handleMapClick} />
            </MapContainer>
        </DashboardLayout>
    );
}