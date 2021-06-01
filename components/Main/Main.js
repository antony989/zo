import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import Image from "next/image";

import HomeIcon from '../assets/HomeIcon';
import FavoriteIcon from '../assets/FavoriteIcon';
import HashIcon from '../assets/HashIcon';
import TrendIcon from '../assets/TrendIcon';
import UserIcon from '../assets/UserIcon';
import BellIcon from '../assets/BellIcon';

import { asyncEventFetching } from "../../redux/actions/fetchEvent";

import MapGL, {
  Marker, 
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator
} from 'react-map-gl';
import Pin from '../MapSource/pin';
const TOKEN = 'pk.eyJ1Ijoia3Vyb3NhayIsImEiOiJja3A0cnI1MDkyM2xkMnZtd2QzczVicjZuIn0.tRWh9CIfJuBhxu92LxZGrA'; // Set your mapbox token here

const geolocateStyle = {
  top: 0,
  right: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  right: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  right: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  right: 0,
  padding: '10px'
};

const TimeWrapper = styled.div`
  position: relative;
  display: block;
  margin-left: 500px;
  height:100vh;
  background-color: rgba(47,49,54,1);
  -webkit-transition: all .1s ease;
  transition: all .1s ease;
  @media (min-width: 320px) and (max-width: 990px){
    margin-left:0px;
  }
`
const BottomNav = styled.div`
  position: fixed;
  display: block;
  background-color: rgb(47 49 54 / 0%);
  -webkit-transition: all .1s ease;
  -webkit-transition: all .1s ease;
  transition: all .1s ease;
  left: 500px;
  bottom: 60px;
  height: 70px;
  width: 100%;
  @media (min-width: 320px) and (max-width: 990px){
    left:0px;
  }
`
const BottomNavContainer = styled.div`
  width: 50%;
  height:100%;
  position: relative;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 990px){
    width: 380px;
  }
  @media (max-width: 580px){
    width: 340px;
  }
  @media (min-width: 1882px){
    width: 40%;
  }
  @media (min-width:990px) and (max-width: 1203px){
    margin-left: 10px;
  }
`
const BottomNavContainerItem = styled.div`
  width: inherit;
  height: inherit;
  max-width: 340px;
  padding: 8px;
  padding-top: 11px;
  background: rgba(11,15,32,1);
  border-radius: 33px;
  @media (min-width:990px) and (max-width: 1203px){
    width: 246px;
  }
  @media (min-width: 1204px){
    width: 301px;
  }
`

function Main({}) {
    const dispatch = useDispatch();
    const mapviewport = useSelector((state) => state.mapviewport);
    
    const [viewport, setViewport] = useState({
      latitude: 37.532600,
      longitude: 127.024612,
      zoom: 7.5,
      bearing: 0,
      pitch: 0
    });
    
    const [marker, setMarker] = useState({
      latitude: 37.532600,
      longitude: 127.024612
    });
    const [events, logEvents] = useState({});

    const onMarkerDragStart = useCallback(event => {
      logEvents(_events => ({..._events, onDragStart: event.lngLat}));
    }, []);

    const onMarkerDrag = useCallback(event => {
      logEvents(_events => ({..._events, onDrag: event.lngLat}));
    }, []);

    const onMarkerDragEnd = useCallback(event => {
      logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
      setMarker({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      });
    }, []);

    dispatch(asyncEventFetching(events));

    return(
      <>
      <TimeWrapper className="Timew">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/kurosak/ckp4vzi5g0fqr18lsjiafqk8f"
          onViewportChange={setViewport}
          mapboxApiAccessToken={TOKEN}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          >
            <Pin size={20} />
          </Marker>

          <GeolocateControl style={geolocateStyle} />
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navStyle} />
          <ScaleControl style={scaleControlStyle} />
        </MapGL>
      </TimeWrapper>
      <BottomNav>
        <BottomNavContainer>
          <BottomNavContainerItem>
                    <div className="flex content-center flex-wrap">
                            <div className="bottom_nav_set bottom_nav_item active">
                              <HomeIcon />
                            </div>
                            <div className="bottom_nav_set bottom_nav_item">
                              <TrendIcon />
                            </div>
                            <div className="bottom_nav_set bottom_nav_item">
                              <BellIcon />
                            </div>
                            <div className="bottom_nav_set bottom_nav_item">
                              <HashIcon />
                            </div>
                            <div className="bottom_nav_set bottom_nav_item">
                              <UserIcon />
                            </div>
                    </div>
          </BottomNavContainerItem>
        </BottomNavContainer>
      </BottomNav>
      </>
    )
}
export default Main;