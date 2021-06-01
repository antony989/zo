import { PhotoCardItem, PhotoThumbWrapper, PhotoThumb, PhotoContentWrapper, PhotoContentSubInfo, PhotoContentInfo } from "./PhotoCardStyles"
const PhotoCard = () => {
    return(
        <PhotoCardItem>
            <div>
                <PhotoThumbWrapper>
                    <PhotoThumb src="https://cdn.datepop.co.kr/seouldatepop/shop/7952/31710_shop_item_2020-08-18_142725.jpg" />
                </PhotoThumbWrapper>
                <PhotoContentWrapper>
                    <PhotoContentSubInfo>
                        추천합니다!
                    </PhotoContentSubInfo>
                    <PhotoContentInfo>
                        미니어처 제작기.txt
                    </PhotoContentInfo>
                </PhotoContentWrapper>
            </div>
        </PhotoCardItem>
    )
}
export default PhotoCard