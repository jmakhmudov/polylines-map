import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../redux/store';

function ChangeView({ center, zoom }: { center: LatLngExpression; zoom: number }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Map = () => {
    const [decodedPolyline, setDecodedPolyline] = useState<[[number, number]]>([[0, 0]]);
    const [mapCenter, setMapCenter] = useState<LatLngExpression >([59.837965, 30.354505]);
    const { decoded } = useSelector((state: RootState) => state.geometry);
    const { point1, point2, point3 } = useSelector((state: RootState) => state.markers);

    useEffect(() => {
        if (decoded.length > 1) {
            const bounds = L.latLngBounds(decoded);
            const center = bounds.getCenter();

            setMapCenter([center.lat, center.lng]);
            setDecodedPolyline(decoded);
        }
    }, [decoded]);

    const markers = [
        {
            id: 0,
            position: point1.split(", ").map(parseFloat) as LatLngExpression,
            title: 'Точка 1',
            description: point1
        },
        {
            id: 1,
            position: point2.split(", ").map(parseFloat) as LatLngExpression,
            title: 'Точка 2',
            description: point2

        },
        {
            id: 2,
            position: point3.split(", ").map(parseFloat) as LatLngExpression,
            title: 'Точка 3',
            description: point3
        },
    ]

    return (
        <MapContainer center={mapCenter} className='map' zoom={12} style={{ height: '400px' }}>
            <ChangeView center={mapCenter} zoom={12} />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline positions={decodedPolyline} color="blue" />
            {
                markers[0].description !== '' ?
                    markers.map(marker => (
                        <Marker key={marker.id} position={marker.position}>
                            <Popup>
                                <h3>{marker.title}</h3>
                                <p>{marker.description}</p>
                            </Popup>
                        </Marker>
                    ))
                    : <></>
            }
        </MapContainer>
    );
};

export default Map;
