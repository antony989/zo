import styled from 'styled-components';

export const TimeBomb = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    z-index: 2003;
    width: 500px;
    display: block;
    overflow: hidden;
    background-color: rgb(11 15 32);
    -webkit-transition: all .1s ease;
    transition: all .1s ease;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

    @media (min-width: 320px) and (max-width: 990px){
        -webkit-transform: translate3d(0%, 0, 0);
        transform: translate3d(0%, 0, 0);
        width: 100%;
    }
`
export const TbCircus = styled.div`
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    bottom: 53px;
    padding: 0;
`
export const ContentWrapper = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
`
export const ContentTitleWrapFlex = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ContentTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #eee;
    font-weight: bold;
    font-size: 1.2rem;
    max-width: 260px;
    margin-bottom:15px;
`
export const ContentSmallTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #eee;
    font-weight: bold;
    font-size: .9rem;
    max-width: 190px;
    margin-bottom:15px;
    margin-top: 15px;
`
export const TimeWrapper = styled.div`
  position: relative;
  display: block;
  margin-left: 500px;
  height:100vh;
  background-color: rgba(47,49,54,1);
  -webkit-transition: all .1s ease;
  transition: all .1s ease;
  @media (min-width: 320px) and (max-width: 990px){
    margin-left:0px;
  }
`
export const BottomNav = styled.div`
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
export const BottomNavContainer = styled.div`
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
export const BottomNavContainerItem = styled.div`
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
export const OverlayContentWrapper = styled.div`
`