import styled from 'styled-components';

export const PhotoCardItem = styled.div`
    width: 230px;
    height: 216px;
`
export const PhotoThumbWrapper = styled.div`
    position: relative;
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-width: 1px 1px 0 1px;
        border-style: solid;
        border-color: rgba(0,0,0,.04);
        background-color: rgba(0,0,0,.04);
        -webkit-border-radius: inherit;
        border-radius: inherit;
        z-index: 1;
    }
`
export const PhotoThumb = styled.img`
    width: 229px;
    height: 122px;
    object-fit: cover;
`
export const PhotoContentWrapper = styled.div`
    padding: 12px 15px 15px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #11131c;
    box-shadow: rgb(0 0 0) 0px 5px 10px;
`
export const PhotoContentSubInfo = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4rem;
`
export const PhotoContentInfo = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.9rem;
    height: auto;
    letter-spacing: -.5px;
`