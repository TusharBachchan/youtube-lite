import hamburgerButton from '../images/hamburger-button.png';
import youtubeLogo from '../images/youtube-logo.png'
import searchIcon from '../images/search-icon.png'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/reducers';
import ButtonList from './ButtonList'
import { Link } from "react-router-dom"
import ProfileLogo from "./ProfileLogo"
import { useState, useEffect } from 'react';
import { suggestionsApi } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const handleSidebarToggle = () => {
        dispatch(toggleSideBar())
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [suggestionsFocus, setSuggestionsFocus] = useState(false)
    useEffect(() => {
        console.log(searchQuery)
        const timer = setTimeout(() => getSuggestions(), 300)
        return () => clearTimeout(timer)
    }, [searchQuery])
    // const getSuggestions = async () => {
    //     const data = await fetch(suggestionsApi + searchQuery);
    //     const json = await data.json();
    //     setSuggestions(json[1])
    // }
    const getSuggestions = async () => {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
        };
        const data = await fetch(suggestionsApi + searchQuery, requestOptions);
        const json = await data.json();
        setSuggestions(json[1])
    }
    return (<div className='fixed bg-white w-screen'>
        <div className="flex p-4 justify-between ">
            <div className="flex">
                <button onClick={handleSidebarToggle}><img className="h-7 mr-7 cursor-pointer" src={hamburgerButton} alt="hamburger-button" /></button>
                <Link to="/"><img className="h-7 cursor-pointer" src={youtubeLogo} alt="hamburger-button" /></Link>
            </div>
            <div className="search-suggestions-container w-3/5">
                <div className='search-container flex'>
                    <input type="text" placeholder='Search' className='w-4/6 ml-3 md:w-3/4 px-9 border-solid border-2 border-l-gray-300 rounded-l-3xl' value={searchQuery} onChange={(e) => {
                        setSearchQuery(e.target.value)

                    }} 
                    onFocus={() => setSuggestionsFocus(true)}
                    onBlur={() => setSuggestionsFocus(false)}
                    />
                    <button className='w-16 rounded-r-3xl border-solid border-2 border-r-gray-300'><img src={searchIcon} alt="" className='h-7 m-auto' /></button>
                </div>
                <div className="suggestions-container ml-3 sm: 3/6 md:w-3/6 rounded-lg shadow-lg bg-slate-50 fixed">
                    <ul>
                        {suggestionsFocus && suggestions.map((suggestion) => <li className='pt-2' key={suggestion}><img src={searchIcon} alt="" className='h-7 inline px-1' />{suggestion}</li> )
                        }
                    </ul>
                </div>
            </div>

            <ProfileLogo />

        </div >
        <ButtonList />
    </div>)

}
export default Header;
