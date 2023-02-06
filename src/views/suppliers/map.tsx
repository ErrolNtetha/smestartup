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
    latitude?: number | null;
    longitude?: number | null;
    address?: string;
}

export const Map = ({ latitude = 52.51, longitude = 13.38, address = 'Supplier location' }: MapProps) => {
    const locationIcon = new Icon({
        iconUrl: loc,
        iconSize: [50, 60],
    });
    return (
        <div id='map'>
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
        </div>
    );
};
