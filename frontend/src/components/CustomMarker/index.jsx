import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

// Define custom icons
const customIcons = {
  default: L.icon({
    iconUrl: 'https://cdn-icons-png.freepik.com/256/2838/2838912.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  status1: L.icon({
    iconUrl: 'https://cdn-icons-png.freepik.com/256/6125/6125244.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  status2: L.icon({
    iconUrl: 'https://cdn-icons-png.freepik.com/256/727/727606.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  // Add more custom icons as needed
};

const CustomMarker = ({ position, status, popupContent, onClick }) => {
  const icon = customIcons[status] || customIcons.default;

  return (
      <Marker
          position={position}
          icon={icon}
          eventHandlers={{
            click: () => {
              if (onClick) onClick();
            },
          }}
      >
        <Popup>{popupContent}</Popup>
      </Marker>
  );
};

export default CustomMarker;
