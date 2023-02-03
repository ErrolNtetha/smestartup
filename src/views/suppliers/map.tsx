/* eslint-disable jsx-quotes */
/* eslint-disable global-require */
/* eslint-disable  import/no-absolute-path */
import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import loc from '../../assets/location.png';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    latitude: number;
    longitude: number;
    address: string;
}

export const Map = ({ latitude, longitude, address }: MapProps) => {
    const locationIcon = new Icon({
        iconUrl: loc,
        iconSize: [50, 60],
    });

    return (
        <div id='map'>
            {(latitude && longitude) && (
                <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]} icon={locationIcon}>
                        <Popup>
                            {address}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};
