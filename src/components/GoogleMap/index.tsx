import React, { useState, useEffect } from 'react';
import {
  GoogleMap as Map,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Autocomplete,
  LoadScript,
} from '@react-google-maps/api';
import axios from 'axios';
import styled from 'styled-components';
import { PositionProps, StoreProps, GoogleMapProps } from './types';
import Loader from '../Loader';
import StoreList from './StoreList';
import { Input } from '../Input';

const GoogleMap = ({
  initialPosition = {
    lat: 32.8295576,
    lng: -117.2349526,
  },
}: GoogleMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_TOKEN || '',
  });
  const [googleLoadCompleted, setGoogleLoadCompleted] = React.useState(false);
  const [position, setPosition] = React.useState<PositionProps>(initialPosition);
  const [isLoading, setLoading] = useState(false);
  const [stores, setStores] = useState<StoreProps[]>([]);
  const [location, setLocation] = React.useState<google.maps.places.Autocomplete | null>(null);
  const [popupOpen, setPopupOpen] = useState<StoreProps | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    fetchLocations();
  }, [position]);

  useEffect(() => {
    setGoogleLoadCompleted(true);
  }, [isLoaded]);

  const fetchLocations = () => {
    setLoading(true);
    axios
      .get(
        `https://ws.bullseyelocations.com/RestSearch.svc/DoSearch2?FillAttr=true&GetHoursForUpcomingWeek=true&Radius=1000&StartIndex=0&PageSize=20&LanguageCode=en&Latitude=${position.lat}&Longitude=${position.lng}&CountryId=1&InterfaceID=15703&ClientId=5965&ApiKey=e722b82b-de25-4ceb-b09f-aab90c59d4b6`,
      )
      .then(function (response) {
        if (response.status === 200) {
          setStores(response.data.ResultList);
        }
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(function (error) {
        setLoading(false);
      });
  };

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setLocation(autocomplete);
  };

  const onPlaceChanged = () => {
    if (location !== null) {
      const newPosition = {
        lat: location.getPlace().geometry?.location?.lat() || position.lat,
        lng: location.getPlace().geometry?.location?.lng() || position.lng,
      };
      setPosition(newPosition);
    }
  };

  const MapPopupWindow = () => {
    return (
      <MapContainer>
        {!isLoading ? (
          <Map
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={position}
            zoom={10}
          >
            {stores.map((map, index) => (
              <div key={index}>
                <Marker
                  position={{ lng: map.Longitude, lat: map.Latitude }}
                  icon="./assets/icons/custom/map-marker.png"
                  onClick={() => {
                    setPopupOpen(null);
                    setTimeout(() => {
                      setPopupOpen(map);
                    }, 100);
                  }}
                >
                  {popupOpen && popupOpen.Latitude === map.Latitude && (
                    <InfoWindow position={{ lng: map.Longitude, lat: map.Latitude }}>
                      <StoreList data={popupOpen} />
                    </InfoWindow>
                  )}
                </Marker>
              </div>
            ))}
          </Map>
        ) : (
          <Loader isLarge />
        )}
      </MapContainer>
    );
  };

  return googleLoadCompleted ? (
    <Main>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyD7i6ty2n87L41XrFw5uxvldCrQV5n9yZE"
        libraries={['places']}
      >
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Input type="text" label="Search City" style={{ width: '100%' }} />
        </Autocomplete>
        <Container>
          {isMobile && MapPopupWindow()}
          <MainContainer>
            {stores &&
              stores.map((store, index) => (
                <WrapperMain key={index}>
                  <StoreList data={store} />
                </WrapperMain>
              ))}
          </MainContainer>
          {!isMobile && MapPopupWindow()}
        </Container>
      </LoadScript>
    </Main>
  ) : (
    <></>
  );
};

export default GoogleMap;

const Main = styled.div`
  flex: initial;
  margin-right: 10px;
`;

const MainContainer = styled.div`
  flex: 1;
  margin-right: 10px;
  height: 92vh;
  overflow: scroll;
  padding: 10px;
  @media (max-width: 768px) {
    overflow: initial;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MapContainer = styled.div`
  flex: 2;
  height: 92vh;
  width: 50%;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperMain = styled.div`
  margin-bottom: 25px;
  width: 100%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;
