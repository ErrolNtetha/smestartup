/* eslint-disable jsx-quotes */
import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    return (
        <div id='map'>
            <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[30.83664, -30.00438]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
