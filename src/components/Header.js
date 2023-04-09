import hamburgerButton from '../images/hamburger-button.png';
import youtubeLogo from '../images/youtube-logo.png'
import searchIcon from '../images/search-icon.png'
import {useDispatch} from 'react-redux'
import { toggleSideBar } from '../utils/reducers';
import ButtonList from './ButtonList'
import {Link} from "react-router-dom"
import ProfileLogo from "./ProfileLogo"

const Header = () => {
    const dispatch = useDispatch();
    const handleSidebarToggle = () => {
        dispatch(toggleSideBar())
    }

    return (<div className='fixed bg-white w-screen'>
        <div className="flex p-4 justify-between ">
            <div className="flex">
                <button onClick={handleSidebarToggle}><img className="h-7 mr-7 cursor-pointer" src={hamburgerButton} alt="hamburger-button" /></button>
                <Link to="/"><img className="h-7 cursor-pointer" src={youtubeLogo} alt="hamburger-button" /></Link>
            </div>
            <div className='w-3/5 flex'>
                <input type="text" placeholder='search' className='w-3/4 px-2 border-solid border-2 border-l-gray-300 rounded-l-3xl' />
                <button className='w-16 rounded-r-3xl border-solid border-2 border-r-gray-300'><img src={searchIcon} alt="" className='h-7 m-auto' /></button>
            </div>
            <ProfileLogo/>

        </div >
        <ButtonList />
    </div>)
        
}
export default Header;