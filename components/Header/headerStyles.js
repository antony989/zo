import styled from 'styled-components';

export const MainHeader = styled.header`
    height: 80px !important;
    position: fixed !important;
    left: 0px !important;
    width: 100% !important;
    z-index: 100 !important;
    &:before{
        background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0)) !important;
        content: "" !important;
        height: 100% !important;
        left: 0px !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        top: 0px !important;
        width: 100% !important;
        z-index: 0 !important;
        transition: opacity 150ms ease 0s !important;  
    }
    &:after{
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px !important;
        transform-origin: 50% 0% !important;
        transition-duration: 150ms !important;
        transition-property: opacity, -ms-transform, -webkit-transform, transform !important;
        transition-timing-function: ease !important;
        background: rgb(15 20 43) !important;
        content: "" !important;
        height: 100% !important;
        left: 0px !important;
        position: absolute !important;
        top: 0px !important;
        width: 100% !important;
        z-index: 0 !important;
        opacity: 1 !important;
    }
`
export const HeaderInner = styled.div`
    -webkit-box-align: center !important;
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
    align-items: center !important;
    display: flex !important;
    height: 100% !important;
    position: relative !important;
    width: 100% !important;
    z-index: 1 !important;
    padding: 0px 24px !important;
`
export const HeaderLogoWrapper = styled.div`
    -webkit-flex: 0 0 auto !important;
    -ms-flex: 0 0 auto !important;
    flex: 0 0 auto !important;
`
export const HeaderSearchWrapper = styled.div`
    -webkit-flex: 0 1 auto !important;
    -ms-flex: 0 1 auto !important;
    flex: 0 2 auto !important;
    min-width: 0px !important;
    padding: 0 20px !important;
    width: 100%;
`
export const HeaderSearchInputWrap = styled.div`
    border-radius: 20px;
    background-color: rgb(11 15 32);
    padding-right: 12px;
    height: 40px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    color: #fff;
    box-shadow: 0 2px 6px 0 rgb(13 17 37), 0 24px 20px -24px rgb(12 16 35);
    overflow: hidden;
    & > svg{
        fill: #fff;
        width: 20px;
        cursor: pointer;
    }
`
export const HeaderSearchInput = styled.input`
    border: none;
    flex: 1;
    outline: none;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    background-color: rgb(11 15 32);
    color: #fff;
`
export const HeaderUserWrapper = styled.div`
    -webkit-flex: 1 0 auto !important;
    -ms-flex: 1 0 auto !important;
    flex: 0 0 auto !important;
`