import Flicking from "@egjs/react-flicking";
import PhotoCard2 from "./Card/PhotoCard2"
const Swiper = () => {
    return(
        <Flicking className="flicking flicking0" gap={10}>
            <PhotoCard2 />
            <PhotoCard2 />
            <PhotoCard2 />
            <PhotoCard2 />
            <PhotoCard2 />
            <PhotoCard2 />
            <PhotoCard2 />
        </Flicking>
    )
}
export default Swiper