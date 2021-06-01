import axios from 'axios';
import { useState, useCallback, useRef } from "react";
import { useSelector } from 'react-redux';
import firebase from "../../../../common/firebase"
import { geohashForLocation } from 'geofire-common'
import { v4 as uuidv4 } from 'uuid';

import {
    useAuthUser
  } from 'next-firebase-auth'

const FeedEditor = ({data}) => {
    const AuthUser = useAuthUser()
    const contentInput = useRef();
    const location = useSelector(state => state.location);
    const [content, setContent] = useState("")

    const feedUplaod = useCallback(async () => {
        const token = await AuthUser.getIdToken()  
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        if(content.length > 0){
            const feedData = {
                geoJson: {
                    ...location
                },
                userinfo:{
                    id: data.id,
                    name: data.displayName,
                    photoURL: data.photoURL
                },
                feed:{
                    content: content,
                }
            }
            axios.post(`/api/feedAdd`, feedData, config).then(res=>{
                setContent("")
                contentInput.current.value = ""
            })
        }
    })

    return(
        <div className="card lg:mx-0 p-4 mb-4">
            { location ? (
            <>
                <div className="flex space-x-3">
                    <img src={data.photoURL} className="w-10 h-10 rounded-full" />
                    <input 
                        ref={contentInput}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder={`${data.displayName}님, 무슨 생각을 하고 계신가요?`} 
                        className="bg-gray-900 hover:bg-gray-800 flex-1 h-10 px-6 rounded-full outline-none"
                    />
                </div>
                <div className="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
                    <div className="hover:bg-gray-900 flex items-center p-1.5 rounded-md cursor-pointer svg_wrapper">
                        <svg
                            data-tippy-placement="top"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-original-title="Tooltip"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                        </svg>
                        사진/동영상
                    </div>
                    <div className="hover:bg-gray-900 flex items-center p-1.5 rounded-md cursor-pointer svg_wrapper">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>
                            기분/활동
                    </div>
                    <div className="flex items-center p-1.5">
                    </div>
                    <div className="flex items-center p-1.5">
                    </div>
                    <div className="flex items-center p-1.5">
                    </div>
                    <div className="flex items-center p-1.5">
                    </div>
                    <div className="flex items-center p-1.5">
                        <div 
                            onClick={() => feedUplaod()}
                            className="bg-gray-800 flex h-9 items-center justify-center rounded-md text-white px-5 font-medium cursor-pointer"
                        >
                            작성
                        </div>
                    </div>
                </div>
                <div className="user_location_wrap">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"> </path>
                    </svg>
                    {location.address}
                </div>
            </>
            ) : (
            <>
                <div className="flex space-x-3">
                    <img src={data.photoURL} className="w-10 h-10 rounded-full" />
                    <div className="bg-gray-900 hover:bg-gray-800 flex-1 h-10 px-6 rounded-full outline-none cursor-not-allowed disable_dv">
                        <span>현재 위치를 가져 올 수 없습니다.</span>
                    </div>
                </div>
            </>
            )
            }
        </div>
    )
}
export default FeedEditor;