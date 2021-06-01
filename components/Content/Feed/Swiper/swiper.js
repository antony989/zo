import Flicking from "@egjs/react-flicking";
import PhotoCard from "./Card/PhotoCard"
const Swiper = () => {
    return(
        <Flicking className="flicking flicking0" gap={10}>
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </Flicking>
    )
}
export default Swiper