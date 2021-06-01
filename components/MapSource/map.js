
import Link from "next/link";
import firebase from "../../common/firebase"
import MapGL, {
    Marker, 
    NavigationControl,
    FullscreenControl,
    GeolocateControl,
    FlyToInterpolator
  } from 'react-map-gl';
import {useEffect, useState, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pins from '../MapSource/pin';
import { CSSTransition } from 'react-transition-group';
import { OverlayClose, OverlayItemWrapper } from "../Content/Feed/feedStyles";
import { ContentWrapper, ContentTitleWrapFlex, ContentTitle, ContentSmallTitle, OverlayContentWrapper } from '../Content/contentStyles';
import Swiper from '../Content/Feed/Swiper/swiper'
import Swiper2 from '../Content/Feed/Swiper/swiper2'
import styled from "styled-components";

import HomeIcon from '../assets/HomeIcon';
import FavoriteIcon from '../assets/FavoriteIcon';
import HashIcon from '../assets/HashIcon';
import TrendIcon from '../assets/TrendIcon';
import UserIcon from '../assets/UserIcon';
import BellIcon from '../assets/BellIcon';

// 시간
import moment from 'moment';

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

const Map = ({viewport, setViewport, newport}) => {
    let feeds_array = useSelector(state => state.feeds);

    const TOKEN = 'pk.eyJ1Ijoia3Vyb3NhayIsImEiOiJja3A0cnI1MDkyM2xkMnZtd2QzczVicjZuIn0.tRWh9CIfJuBhxu92LxZGrA'; // Set your mapbox token here
    const positionOptions = {enableHighAccuracy: false};
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
    
    useEffect(()=>{
        if(newport.longitude){
            setViewport({
                ...viewport,
                longitude: newport.longitude,
                latitude: newport.latitude,
                transitionDuration: 5000,
                transitionInterpolator: new FlyToInterpolator(),
                zoom: 11
            });
        }
      },[newport])

    const [mapfeedView, setMapfeedView] = useState("");
    const onSelectPin = useCallback((data) => {
            setMapfeedView(data)
    }, []);

    const onGeolocate = useCallback((data) => {
      // 내 현재 위치를 가져옴
      console.log("data",data)
    }, [])
    
    function closeMapFeed(){
      setMapfeedView("")
    }
    
    return (
        <>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/kurosak/ckp4vzi5g0fqr18lsjiafqk8f"
                asyncRender={true}
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
                dragRotate={false}
                ref={ref => (window.mapRef = ref && ref.getMap())}
                >
                <Pins data={feeds_array} onSelectPin={onSelectPin}/>
                <GeolocateControl 
                  label="내 위치 찾기"
                  style={geolocateStyle} 
                  positionOptions={positionOptions}
                  trackUserLocation={true}
                  fitBoundsOptions={{maxZoom: 11}}
                  onGeolocate={onGeolocate}
                  auto
                />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
            {/* { mapfeedView ? (
            <>
            <OverlayItemWrapper>
                asdfasdf
            </OverlayItemWrapper>
            </>
            ) : (
            <>
            </>
            )
            } */}
            </MapGL>
            <CSSTransition
                in={mapfeedView ? true : false}
                timeout={300}
                classNames="recommend"
                unmountOnExit
                onEnter={() => setMapfeedView(mapfeedView)}
                onExited={() => setMapfeedView(false)}
            >
                <OverlayItemWrapper>
                    <ContentTitleWrapFlex>
                        <ContentTitle>
                            가로수길 주변에는
                        </ContentTitle>
                        <OverlayClose className="overlay" onClick={closeMapFeed}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 20.168l-8.185-8.187L23 3.807 20.168 1l-8.182 8.179L3.81 1 1 3.81l8.186 8.196L1 20.19 3.81 23l8.203-8.192L20.193 23z" />
                          </svg>
                        </OverlayClose>
                    </ContentTitleWrapFlex>

                    {/* 주변핫플레이스 */}
                    <ContentTitleWrapFlex>
                        <ContentSmallTitle>
                            주변 핫플레이스
                        </ContentSmallTitle>
                    </ContentTitleWrapFlex>
                    <OverlayContentWrapper>
                        <Swiper />
                    </OverlayContentWrapper>
                    {/* 주변핫플레이스 끝 */}
                    <ContentTitleWrapFlex>
                        <ContentSmallTitle>
                            추천 테마
                        </ContentSmallTitle>
                    </ContentTitleWrapFlex>
                    <OverlayContentWrapper>
                        <Swiper2 />
                    </OverlayContentWrapper>
                </OverlayItemWrapper>
            </CSSTransition>
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
                      <Link href="/auth">
                        <div className="bottom_nav_set bottom_nav_item">
                          <UserIcon/>
                        </div>
                      </Link>
                    </div>
                  </BottomNavContainerItem>
                </BottomNavContainer>
            </BottomNav>
        </>
    )
}
export default Map;