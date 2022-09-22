import React, { useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import { axiosPublic } from 'config/axiosInstance';
import 'leaflet/dist/leaflet.css';
// import { useFetchData } from 'hoc/useFetchData';

export const Map = () => {
    useEffect(() => {
        // const suppliers = useFetchData('/suppliers');
        const getSuppliers = async () => {
            const response = await axiosPublic.get('/suppliers');
            try {
                console.log(response.data);
            } catch (error) {
                console.log(error.response);
            }
        };
        getSuppliers();
    }, []);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
