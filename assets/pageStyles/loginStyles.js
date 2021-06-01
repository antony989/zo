import styled from 'styled-components';

export const LoginWrap = styled.div`
    height: 100vh;
    overflow: hidden;
`
export const Spectrum = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    font-style: normal;
`
export const LoginCanvas = styled.div`
    height: 100vh;
    position: relative;
    width: 100%;
    @media screen and (min-width: 510px){
        background: #0b0f20 50%;
        background-image: url(https://wallpaperaccess.com/full/19243.jpg);
        background-size: cover;
        height: 100vh;
    }
`
export const LoginCanvasSection = styled.section`
    background: #0b0f20;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    @media screen and (min-width: 510px){
        background: rgba(0,0,0,.5);
    }
    @media screen and (max-width: 509px){
        height: 100%;
    }
`
export const CanvasLayout = styled.div`
    display: -ms-grid;
    display: grid;
    position: relative;
    -ms-grid-rows: 60px min-content minmax(min-content,1fr) minmax(35px,min-content);
    grid-template-rows: 60px -webkit-min-content minmax(-webkit-min-content,1fr) minmax(35px,-webkit-min-content);
    grid-template-rows: 60px min-content minmax(min-content,1fr) minmax(35px,min-content);
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 100%;
    @media screen and (min-width: 510px){
        -ms-grid-columns: 1fr minmax(-webkit-min-content,1280px) 1fr;
        -ms-grid-columns: 1fr minmax(min-content,1280px) 1fr;
        grid-template-columns: 1fr minmax(-webkit-min-content,1280px) 1fr;
        grid-template-columns: 1fr minmax(min-content,1280px) 1fr;
    }
    @media screen and (max-width: 509px){
        height: 100%;
    }
    visibility: visible !important;
`
export const CanvasGrid = styled.div`
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #0b0f20;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding-left: 17px;
    padding-right: 14px;
    position: relative;
    @media screen and (min-width: 510px){
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: rgba(0,0,0,0);
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
    }
    @media screen and (min-width: 1280px){
        display: -ms-grid;
        display: grid;
        -ms-grid-rows: 1fr;
        grid-template-rows: 1fr;
        -ms-grid-columns: 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 0 32px;
        gap: 0 32px;
    }
    @media screen and (min-width: 1768px){
        -ms-grid-columns: 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 0 40px;
        gap: 0 40px;
    }
    &.first-child{
        -ms-grid-row: 1;
        -ms-grid-column: 1;
    }
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
    grid-row: 1/5;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
    grid-row: 1/5;
    @meida screen and (min-width: 510px){
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2/3;
    }
`
export const CanvasLoginLogoWrap = styled.div`
    display: none;
    -ms-grid-row: 1;
    grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
    grid-column: 2/6;
    @media screen and (min-width: 1280px){
        display: block;
    }
`
export const CanvasContextContainer = styled.div`
    @media screen and (min-width: 1024px){
        width: 340px;
    }
    @media screen and (min-width: 1280px){
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        bottom: 0;
        width: 400px;
    }
    @media screen and (min-width: 1024px) and (min-height: 780px){
        position: fixed;
    }
`
export const Context = styled.div`
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 1px;
    -ms-flex-preferred-size: 1px;
    flex-basis: 1px;
    @media screen and (min-width: 1024px){
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    }
`
export const ContextHeader = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 8px;
`
export const ContextImage = styled.img`
    @media screen and (min-width: 1280px){
        height: 110px;
        margin-right: 16px;
        margin-top: -20px;
    }
`
export const ContextH1 = styled.h1`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    display:none;
    @media screen and (max-width: 1280px){
        display:block;
    }
`
export const CanvasPanel = styled.section`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-grid-column: 1;
    -ms-grid-column-span: 23;
    grid-column: 1/13;
    -ms-grid-row: 1;
    grid-row: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    @media screen and (min-width: 510px){
        height: 100%;
        width: 100%;
        width: 510px;
    }
    @media screen and (min-width: 1280px){
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-grid-column: 13;
        -ms-grid-column-span: 9;
        grid-column: 7/12;
    }
`
export const Route = styled.div`
    position: relative;
`
export const CardMainSection = styled.section``
export const CardLayoutLoginWrap = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    @media screen and (min-width: 510px){
        padding: 16px 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`
export const CardLayoutLoginContainer = styled.div`
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`
export const LoginCardLayout = styled.div`
    background: #0b0f20;
    border-radius: 4px;
    border: 1px solid hsla(0,0%,100%,0);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100%;
    padding: 24px 0 40px;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    @media screen and (min-width: 510px){
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 630px;
        padding: 24px 56px 40px;
    }
    @media screen and (min-width: 1024px){
        padding: 40px 56px;
    }
`
export const LoginSubTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    margin: 8px 0 0;
`
export const LoginSocialBar = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 17px;
    font-weight: 300;
    line-height: 23px;
    margin-bottom: 10px;
    &:before{
        content: "";
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-bottom: 1px solid #eaeaea;
        margin-right: .5em;
    }
    &:after{
        content: "";
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-bottom: 1px solid #eaeaea;
        margin-left: .5em;
    }
    @media (min-width: 304px){
        margin-top: 24px!important;
    }
`
export const LoginCardFooter = styled.footer`
    display:block;
    margin-top: 20px;
`
export const LoginFooterDiv = styled.div`
    color: #fff;
    font-size: 12px;
    padding-top: 12px;
    @media (min-width: 304px){
        margin-top: 16px!important;
    }
`
export const LoginH1 = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;
    font-style: normal;
    letter-spacing: .05em;
    text-transform: none;
    margin-bottom: 8px;
    margin-top: 8px;
`
export const LoginCardSection = styled.section`
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin-top: 32px;
`
export const SocialButton = styled.a`
    display: -ms-inline-flexbox;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: inline-flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-align: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    overflow: visible;
    margin: 0;
    border-style: solid;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: button;
    vertical-align: top;
    -webkit-transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,-webkit-box-shadow .13s ease-out;
    transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,-webkit-box-shadow .13s ease-out;
    -o-transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,box-shadow .13s ease-out;
    transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,box-shadow .13s ease-out;
    transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,box-shadow .13s ease-out,-webkit-box-shadow .13s ease-out;
    text-decoration: none;
    font-family: adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;
    line-height: 1.3;
    cursor: pointer;
    position: relative;
    height: 32px !important;
    min-width: 32px;
    padding: 0 6px;
    border-width: 1px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    border-color: #eaeaea;
    color: #505050;
    display: block;
    border-radius: 100px;
    border-width: 2px;
    color: #505050;
    font-weight: 700;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
    min-height: 56px;
    &.facebook{
        background-color: #3b5998;
        border-color: #3b5998;
        color: #fff;
        margin-top:10px;
    }
    &.facebook svg{
        fill:#fff;
    }
`
export const SocialLabel = styled.span`
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    -webkit-align-self: center;
    align-self: center;
    -ms-grid-column-align: center;
    justify-self: center;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: inline;
    vertical-align: top;
    font-size: 15px;
    font-weight: 900;
    line-height: 19px;
    padding-left: 12px;
    padding-right: 0;
    white-space: normal;
    position: absolute;
    top: 33%;
    left: 0;
    right: 0;
    
`
