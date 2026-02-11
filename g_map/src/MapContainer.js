import { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  DirectionsService
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '550px',
};

const source = {
  lat: 28.644846,
  lng: 77.223533,
};

const destination = {
  lat: 28.645269,
  lng: 77.233085,
};

const MapContainer = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showDirections, setShowDirections] = useState(true); // prevents multiple requests

  return (
    <LoadScript googleMapsApiKey="AIzaSyC9Mj_Aib_OCgTJNiv8CbW0C2nYYTraJh8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={source}
        zoom={15}
      >
        <Marker position={source} label="S" />
        <Marker position={destination} label="D" />

        {showDirections && (
          <DirectionsService
            options={{
              destination: destination,
              origin: source,
              travelMode: window.google.maps.TravelMode.DRIVING,
            }}
            callback={(res) => {
              if (res && res.status === 'OK') {
                setDirectionsResponse(res);
                setShowDirections(false); // only call once
              }
            }}
          />
        )}

        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
