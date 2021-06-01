// import { useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { TimeBomb, TbCircus, ContentWrapper, ContentTitleWrapFlex, ContentTitle } from './contentStyles';
// import { Scrollbars } from 'react-custom-scrollbars';
// import Header from "../Header/header";
// import Feed from "./Feed/feed";

// import { asyncViewPortFetching } from "../../redux/actions/setViewport";

// const eventNames = ['onDragStart', 'onDrag', 'onDragEnd'];
// const testJson = [
//     {
//         geoJson:{
//             longitude: 35.532600,
//             latitude: 126.024612
//         },
//         userinfo:{
//             name:"레이니",
//             user_thumb:"https://www.secretsounds.com/app/uploads/2018/01/LANY-FEATURE-1920x1200-c-default.jpg"
//         },
//         feed:{
//             upload_date:"4시간 전",
//             content_image:"https://cdn.vox-cdn.com/thumbor/MLfoFi_Xmnov6slcKFPQxLoOqUk=/0x0:3992x2992/1200x675/filters:focal(1648x642:2286x1280)/cdn.vox-cdn.com/uploads/chorus_image/image/55813197/LA_Shutterstock.29.jpg",
//             content:"무야호~",
//             comments_count: 1,
//             comments_lists: [],

//         }
//     },

//     {
//         geoJson:{
//             longitude: 38.532600,
//             latitude: 124.024612
//         },
//         userinfo:{
//             name:"아이유",
//             user_thumb:"https://thinkinstead.net/wp-content/uploads/2020/03/IU-1024x876.jpg"
//         },
//         feed:{
//             upload_date:"2시간 전",
//             content_image:"https://cdn.ios.co.kr/photo/file/tn/b2437595a70cca90fdcb657c6e60b7186.jpg",
//             content:"이탈리아~",
//             comments_count: 4,
//             comments_lists: [],

//         }
//     }
// ]


// function round5(value) {
//   return (Math.round(value * 1e5) / 1e5).toFixed(5);
// }


// const Content = () => {
//     const dispatch = useDispatch();
//     const feedClick = (longitude,latitude) => {
//         const feed = {
//             longitude,
//             latitude,
//             zoom: 11,
//             transitionDuration: 'auto'
//         }
//         // 참고
//         // 해당 부분 이제 참고하기
//         // 진짜 redux 사용법 터득했다..
//         dispatch(asyncViewPortFetching(feed));
//     }

//     return(
//         <>
//             <TimeBomb className="b_bom">
//                 <Header />
//                 <TbCircus>
//                     <Scrollbars
//                         style={{ height: "calc(100vh - 79px)" }}
//                     >
//                         <ContentWrapper>
//                             {eventNames.map(eventName => {
//                                 const {events = {}} = useSelector((state) => state);
//                                 const lngLat = events[eventName];
//                                 return (
//                                     <div key={eventName}>
//                                     <strong>{eventName}:</strong> {lngLat ? lngLat.map(round5).join(', ') : <em>null</em>}
//                                     </div>
//                                 );
//                             })}
//                             <ContentTitleWrapFlex>
//                                 <ContentTitle>
//                                     지금 뜨는 피드
//                                 </ContentTitle>
//                             </ContentTitleWrapFlex>
//                             {
//                                 testJson.map((item, index) => {
//                                     return (
//                                         <div onClick={() => feedClick(item.geoJson.longitude, item.geoJson.latitude)}>
//                                             <Feed 
//                                                 {...item} 
//                                                 key={index}
//                                             />
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </ContentWrapper>
//                     </Scrollbars>
//                 </TbCircus>
//             </TimeBomb>
//         </>
//     )
// }
// export default Content;