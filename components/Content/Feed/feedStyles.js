import styled from 'styled-components';


// map에 표시됨
export const OverlayItemWrapper = styled.div`
    right: 50px;
    top: 10px;
    width: 320px;
    height: 90vh;
    padding: 15px;
    position: absolute;
    background: #101010;
    z-index:99;
    border-radius:15px;
    -webkit-box-shadow: 0px 5px 14px -4px #000000; 
    box-shadow: 0px 5px 14px -4px #000000;
`
export const OverlayClose = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    cursor:pointer;
`