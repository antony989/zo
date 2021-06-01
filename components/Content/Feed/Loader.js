import ThreeDotIcon from "../../assets/ThreeDotIcon"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Loader = () => {
    return(
        <SkeletonTheme color="#262727" highlightColor="#696969">
            <div className="card lg:mx-0 uk-animation-slide-bottom-small">
                <div className="flex justify-between items-center lg:p-4 p-2.5">
                    <div className="flex flex-1 items-center space-x-4">
                        <a href="#">
                            <Skeleton circle={true} height={40} width={40} />
                        </a>
                        <div className="flex-1 font-semibold capitalize">
                            <a href="#">
                                <Skeleton width={120}/>
                            </a>
                            <div className="flex items-center space-x-2 text-sm">
                                <span className="geo_location_d"><Skeleton width={54}/></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="feed_menus hover:bg-gray-900 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700">
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                        <div className="p-3 border-b border-gray-900">
                            <div><Skeleton width={250}/></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-3">
                <div className="flex space-x-4 lg:font-bold">
                    <div className="flex items-center space-x-2">
                        <Skeleton width={120}/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Skeleton width={120}/>
                    </div>
                    <div className="flex items-center space-x-2 flex-1 justify-end">
                        <Skeleton width={70}/>
                    </div>
                </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}
export default Loader;