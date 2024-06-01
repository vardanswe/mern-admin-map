import React, { useEffect, useRef, useState } from 'react';
import { FeatureGroup, GeoJSON, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Col, Row} from "antd";

const eer  = require('../../GeoJSON/eer.json');

export default function Index( ) {
    const mapRef = useRef();
    const ZOOM_LEVEL = 6;
    const center = { lat: 54.431123, lng: -3.5324434 };
    return (
        <Row key={item.propsKey} gutter={12}>
         <h1>Map</h1>
        </Row>
    );
}