import ButtonList from './ButtonList'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
const Body = () => {
    return <div className='flex'>
            <SideBar />
        <div>
            <ButtonList />
            <VideoContainer />
        </div>
    </div>
}
export default Body;