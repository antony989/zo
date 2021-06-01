import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/router'
import { asyncLocationFetching } from '../redux/actions/setLocation'

// 시간
import moment from 'moment';

import Head from "next/head";
import { Store, Persistor } from "../redux/store";
import NextNprogress from 'nextjs-progressbar';

import Geocode from "react-geocode";
import { geohashForLocation, geohashQueryBounds, distanceBetween } from 'geofire-common'
import firebase from "../common/firebase"


import axios from 'axios';
import initAuth from '../common/initAuth'
initAuth()

function getPosition() {
  return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const db = firebase.firestore(); 
  const apiKeyLists = [
    "AIzaSyAfTmvVvLL6-SdQy6O5GcgiG3vxoDDEhic",
    "AIzaSyDTnFckTcPidqCa5F9dWom4H_0hbJu9Nh0",
    "AIzaSyClju_ARCiItrAPlkMapDAZWJUk66NeodI",
    "AIzaSyDwG4Tj1ziODB2N2--aZhhjn7IyIpNR0-k",
    "AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic",
    "AIzaSyBGCQae31kBA51sdMgem5Rh_moVP-XcPtY",
    "AIzaSyDjkpKsYyXNeF44G8q58lpxC6W0BIYR1zg",
    "AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0",
    "AIzaSyBLAI47V3CRFb-lwrRRpHLcVhVfx5uFebA",
    "AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
  ]

  let feeds_array = useSelector(state => state.feeds);
  useEffect(()=>{
    // geocode
    const randomApiKey = Math.floor(Math.random() * apiKeyLists.length);
    Geocode.setApiKey(apiKeyLists[randomApiKey]);
    Geocode.setLanguage("ko");
    Geocode.setRegion("ko");
    Geocode.setLocationType("ROOFTOP");
    getPosition().then(async data=>{
      const latitude = data.coords.latitude
      const longitude = data.coords.longitude
      Geocode.fromLatLng(latitude, longitude).then(
          (response) => {
            const address = response.results[0].formatted_address;
            const geoData = {
              latitude:latitude,
              longitude:longitude,
              address:address
            }
            dispatch(asyncLocationFetching(geoData))
          },
          (error) => {
            console.error(error);
          }
      );
    })
    // geocode end
  },[feeds_array])

  useEffect(() => {
    localStorage.removeItem("persist:root");
  }, []);

  return (
    <div>
      <NextNprogress
        color="#D3C64A"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <Head>
        <meta charset="utf-8" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      
      <Component {...pageProps} />
    </div>
  );
};


const MYapp = ({ Component, pageProps }) => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <App Component={Component} pageProps={pageProps} />
    </PersistGate>
  </Provider>
);
export default MYapp
