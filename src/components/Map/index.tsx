import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapData from '../../@utils/map.json';
import { MapProps, MarkedLocation } from './types';

const PopupContent = styled.span`
  font-family: var(--font-family-base);
`;

const MapComponent: React.FC<MapProps> = ({ viewport }) => {
  const [popupData, setPopupData] = useState<MarkedLocation | null>(null);
  const [popupToggle, setPopupToggle] = useState<boolean>(false);

  useEffect(() => {
    setPopupToggle(!!popupData);
  }, [popupData]);

  const onClickMarkerHandler = (map: MarkedLocation | null) => {
    setPopupData(map);
  };
  return (
    <MapContainer>
      <Map
        initialViewState={viewport}
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {mapData.markers.map((map, index) => (
          <div key={index}>
            <Marker
              longitude={map.longitude}
              latitude={map.latitude}
              onClick={() => onClickMarkerHandler(map)}
            >
              <img src="./assets/icons/custom/map-marker.png" alt="map marker" />
            </Marker>
            {popupData && popupToggle && (
              <Popup
                latitude={popupData.latitude}
                longitude={popupData.longitude}
                onClose={() => setPopupData(null)}
                closeButton={true}
              >
                <PopupContent style={{ fontSize: '1vw' }}>{popupData.name}</PopupContent>
              </Popup>
            )}
          </div>
        ))}

        <NavigationControl position="bottom-right" />
        <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} />
      </Map>
    </MapContainer>
  );
};

export default MapComponent;

const MapContainer = styled.div`
  height: 92vh;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    height: 82vh;
  }
`;
