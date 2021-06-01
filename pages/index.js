// auth
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
  getFirebaseAdmin
} from 'next-firebase-auth'
import axios from 'axios';
import firebase from "../common/firebase"
import { v4 as uuidv4 } from 'uuid';

// react
import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { asyncViewPortFetching } from '../redux/actions/setViewport'
import { asyncFeedFetching } from '../redux/actions/setFeed'

// serverside
import getAbsoluteURL from '../utils/getAbsoluteURL'
import { geohashForLocation } from 'geofire-common'

// layout
import Loader from "../components/Content/Feed/Loader";
import Layout from "../components/Layout";
import Feed from "../components/Content/Feed/feed";
import FeedEditor from '../components/Content/Feed/Editor/feedEditor'
import { ContentWrapper, ContentTitleWrapFlex, ContentTitle } from '../components/Content/contentStyles';

// 시간
import moment from 'moment';

function getPosition() {
  return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
const Home = (props) => {
    const AuthUser = useAuthUser()
    const dispatch = useDispatch();
    const [feeds, setFeeds] = useState(0);
    const [geoLocation, setGeoLocation] = useState([])
    useEffect(async ()=>{
      const token = await AuthUser.getIdToken()  
      let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      }
      let geo = await getPosition()
      const latitude = geo.coords.latitude
      const longitude = geo.coords.longitude
      setGeoLocation({latitude,longitude})
      let result = await axios.get(`/api/feedFetch?lat=${latitude}&lon=${longitude}&km=20`, config)
      let feedData = []
      for(const item of result.data.feeds){
        feedData.push({
          ...item
        })
      }
      dispatch(asyncFeedFetching(feedData))
      setFeeds(feedData)
    },[geoLocation])
    console.log(geoLocation)

    const onClickFeedtoMap = useCallback((data) => {
      dispatch(asyncViewPortFetching(data))
    }, [])

    return (
        <Layout title="CONNECT - 피드">
          <ContentWrapper>

            <FeedEditor data={AuthUser} />

            <ContentTitleWrapFlex>
              <ContentTitle>
                지금 내 주위는? <span className="small_texts">반경 20km</span>
              </ContentTitle>
            </ContentTitleWrapFlex>
            {/* <button onClick={tests}>asdfasdf</button> */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-3 lg:grid-cols-1 lg:gap-3 xl:grid-cols-1 xl:gap-3">
            {
              feeds[0] ? feeds.map((item, index) => {
                return (
                  // props.onSelectFeed(item.geoJson)
                  <div onClick={() => onClickFeedtoMap(item.feed.geoJson)} key={index}>
                    <Feed 
                      {...item} 
                    />
                  </div>
                )
              }) : (
              <>
                <div>
                  <Loader />
                    <div className="mb-3"></div>
                  <Loader />
                </div>
              </>
              )
            }
            </div>
          </ContentWrapper>
        </Layout>
      );
}

export const getServerSideProps =  withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  return {
    props:{
    }
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home)