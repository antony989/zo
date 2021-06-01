// auth
import {
    useAuthUser
  } from 'next-firebase-auth'
  import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from 'next/image';
import {  } from "./feedStyles";
import ThreeDotIcon from "../../assets/ThreeDotIcon"

import { v4 as uuidv4 } from 'uuid';
import firebase from "../../../common/firebase"

// 시간
import Moment from 'react-moment';
import 'moment/locale/ko';

const Feed = (data) => {
    const AuthUser = useAuthUser()
    const [likeCount, setLikeCount] = useState(data.feed.like_count);
    const [isLike , setIsLike] = useState(data.isLike);
    // feed data
    console.log("asdf",data)
    const id = data.id;
    const feedLike = useCallback(async () => {
        const token = await AuthUser.getIdToken()
        
        const likeData = {
            type: 'feed',
            feed_id: id,
            user_id: AuthUser.id
        }
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        if(!isLike){
            axios.post(`/api/likeFeed`, likeData, config).then(res=>{
                setLikeCount(res.data.like_count);
                setIsLike(true);
            })
        } else {
            axios.post(`/api/unlikeFeed`, likeData, config).then(res=>{
                setLikeCount(res.data.like_count);
                setIsLike(false);
            })
        }
    })

    return(
        <div className="card lg:mx-0 uk-animation-slide-bottom-small">
            <div className="flex justify-between items-center lg:p-4 p-2.5">
                <div className="flex flex-1 items-center space-x-4">
                    <a href="#">
                        <img src={data.feed.userinfo.photoURL} className="bg-gray-200 border border-black rounded-full w-10 h-10" />
                    </a>
                    <div className="flex-1 font-semibold capitalize">
                        <a href="#">
                            {data.feed.userinfo.name}
                        </a>
                        <div className="flex items-center space-x-2 text-sm">
                            <span>
                                <Moment fromNow>{data.feed.created_at}</Moment>
                            </span>
                            <span> · </span>
                            <span className="geo_location_d">{data.feed.geoJson.address}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="feed_menus hover:bg-gray-900 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700">
                        <ThreeDotIcon />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={feed.content_image} className="max-h-96 w-full object-cover" /> */}
                </div>
                <div>
                    <div className="p-3 border-b border-gray-900">
                        {data.feed.feed.content}
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-3">
                <div className="flex space-x-4 lg:font-bold">
                    <div className={`flex items-center space-x-2 cursor-pointer ${isLike ? "isLikeActive" : ""}`} onClick={() => feedLike()}>
                        <div className="p-2 rounded-full text-white lg:bg-gray-900 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" className="dark:text-gray-100">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                        </div>
                        <div>좋아요</div>
                        <p className="space-x-1">{likeCount}</p>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <div className="p-2 rounded-full text-white lg:bg-gray-900 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" className="dark:text-gray-100">
                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>댓글</div>
                    </div>
                    <div className="flex items-center space-x-2 flex-1 justify-end cursor-pointer">
                        <div className="p-2 rounded-full text-white lg:bg-gray-900 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" className="dark:text-gray-100">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                            </svg>
                        </div>
                        <div>공유</div>
                    </div>
                </div>

                {/* 댓글 http://demo.foxthemes.net/socialitev2.1/feed.html */}
                <div className="border-t py-4 space-y-4 border-gray-900">
                    <div className="flex">
                        <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                            <img src="https://file2.nocutnews.co.kr/newsroom/image/2019/11/19/20191119092356684958_0_768_768.jpg" className="absolute h-full rounded-full w-full"/>
                        </div>
                        <div>
                            <div className="py-2 px-3 rounded-md bg-gray-900 relative lg:ml-5 ml-2 lg:mr-12">
                                <p className="leading-6">댓글 디자인..</p>
                            </div>
                            <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                                <a href="#">답글</a>
                                <span>10분 전</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#">
                    10개의 댓글 더 보기
                </a>
                <div className="bg-gray-900 rounded-full relative">
                    <input placeholder="댓글을 입력하세요.." className="bg-transparent w-full max-h-10 shadow-none px-5 input_comment" />
                </div>
            </div>
        </div>
    )
}
export default Feed;