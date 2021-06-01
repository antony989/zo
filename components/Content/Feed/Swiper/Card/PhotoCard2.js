import { PhotoCardItem, PhotoThumbWrapper, PhotoThumb, PhotoContentWrapper, PhotoContentSubInfo, PhotoContentInfo } from "./PhotoCardStyles"
const PhotoCard = () => {
    return(
        <PhotoCardItem>
            <div>
                <PhotoThumbWrapper>
                    <PhotoThumb src="https://wallpaperaccess.com/full/3725741.jpg" />
                </PhotoThumbWrapper>
                <PhotoContentWrapper>
                    <PhotoContentSubInfo>
                        천의 얼굴 시즈오카
                    </PhotoContentSubInfo>
                    <PhotoContentInfo>
                        포토그래퍼의 비밀의 장소들
                    </PhotoContentInfo>
                </PhotoContentWrapper>
            </div>
        </PhotoCardItem>
    )
}
export default PhotoCard