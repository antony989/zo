import styled from "styled-components";
import Head from "next/head"
import { useEffect, useState, useCallback } from "react";
import { useSelector } from 'react-redux';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth'
import { useRouter } from 'next/router'

import { TimeBomb, TbCircus, TimeWrapper } from '../components/Content/contentStyles';
import Header from "../components/Header/header";
import { Scrollbars } from 'react-custom-scrollbars';

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('../components/MapSource/map'))


const Layout = ({ children, title  }) => {
    const AuthUser = useAuthUser()
    // const [mapData, setmapData] = useState("");
    const [viewport, setViewport] = useState({
      latitude: 37.532600,
      longitude: 127.024612,
      zoom: 7.5,
      bearing: 0,
      pitch: 0
    });

    const router = useRouter()
    const path = router.pathname

    // 참고
    // 해당 부분 이제 참고하기
    // 진짜 redux 사용법 터득했다..
    const geoJson = useSelector(state => state.mapviewport);
    
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          { path === "/auth" || path === "/register" ? 
            (
              <>
                {children}
              </>
            ) : 
            (
              <>
                <TimeBomb className="b_bom">
                    <Header AuthUser={AuthUser} />
                    <TbCircus>
                      <Scrollbars
                        style={{ height: "calc(100vh - 79px)" }}
                      >
                        {children}
                      </Scrollbars>
                  </TbCircus>
                </TimeBomb>
                <TimeWrapper className="Timew">
                  <Map viewport={viewport} setViewport={setViewport} newport={geoJson}/>
                </TimeWrapper>
              </>
            )
          }
        </>
      );
}
export default Layout