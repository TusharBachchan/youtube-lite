import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
const Body = () => {
    return <div className='flex'>
            <SideBar />
        <div>
            <Outlet />
        </div>
    </div>
}
export default Body;