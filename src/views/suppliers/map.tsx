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

export const Map = () => {
    const locationIcon = new Icon({
        iconUrl: loc,
        iconSize: [50, 60],
    });
    return (
        <div id='map'>
            <MapContainer center={[52.51, 13.38]} zoom={13} scrollWheelZoom>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[52.51, 13.38]} icon={locationIcon}>
                    <Popup>
                        A pop up for showing more info about this supplier.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
