import React, { useRef, useState } from "react";
import 'leaflet/dist/leaflet.css';

import { DashboardLayout } from "@/layout";
import {FeatureGroup, GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import CustomMarker from "@/components/CustomMarker";
const eer  = require('../GeoJSON/eer.json');

const getFeatureStyle = (feature) => {
    let color;
    switch (feature.properties.status) {
        case 'status1':
            color = 'red';
            break;
        case 'status2':
            color = 'blue';
            break;
        default:
            color = 'green';
            break;
    }

    return {
        fillColor: color,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
};

export default function Compare() {
    const mapRef = useRef();
    const ZOOM_LEVEL = 6;
    const center = { lat: 54.431123, lng: -3.5324434 };
    // Array of markers with different statuses
    const markers = [
        { id: 1, position: [54.43, -3.53], status: 'status1', popup: "Marker 1" },
        { id: 2, position: [54.50, -3.60], status: 'status2', popup: "Marker 2" },
        { id: 3, position: [54.45, -3.50], status: 'default', popup: "Marker 3" },
    ];


    return (
        <DashboardLayout>
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{height:'80vh'}}>
                {markers.map(marker => (
                    <CustomMarker
                        key={marker.id}
                        position={marker.position}
                        status={marker.status}
                        popupContent={marker.popup}
                        onClick={() => console.log(`Marker ${marker.id} clicked`)}
                    />
                ))}
                <FeatureGroup>
                    {eer && <GeoJSON data={eer} style={getFeatureStyle}/>}
                </FeatureGroup>
            </MapContainer>
        </DashboardLayout>
    );
}
