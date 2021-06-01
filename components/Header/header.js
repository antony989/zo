import Image from "next/image";
import Link from "next/link";
import { HeaderInner, HeaderLogoWrapper, HeaderUserWrapper, HeaderSearchWrapper, MainHeader, HeaderSearchInputWrap, HeaderSearchInput } from './headerStyles';
import {useEffect, useRef, useState, useCallback} from 'react'

const Header = ({AuthUser}) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setUser(AuthUser)
        if(!user){
            setLoading(true)
        } else {
            setLoading(false)
        }
    })
    return(
        <MainHeader>
            <HeaderInner>
                <HeaderLogoWrapper>
                    <Image
                        className="logos"
                        width={112}
                        height={90}
                        src={"/logo_small.png"}
                        />
                </HeaderLogoWrapper>
                <HeaderSearchWrapper>
                    <HeaderSearchInputWrap>
                        <HeaderSearchInput placeholder="검색해보세요.."></HeaderSearchInput>
                        <svg id="search" viewBox="0 0 32 32">
                            <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z"></path>
                        </svg>
                    </HeaderSearchInputWrap>
                </HeaderSearchWrapper>
                <HeaderUserWrapper>
                    { loading ? (<></>) : 
                    (
                        <>                            
                            <div className="search_option_wrap profile_btn_set profile_wrap">
                                <img src={user.photoURL} />
                            </div>
                        </>
                    )
                    }
                </HeaderUserWrapper>
            </HeaderInner>
        </MainHeader>
    )
}
export default Header;