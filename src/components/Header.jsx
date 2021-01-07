import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(!darkMode)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="Header">
            <nav id="header" class="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400 ">
                <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
                    <label for="menu-toggle" class="cursor-pointer md:hidden block">
                        <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input class="hidden" type="checkbox" id="menu-toggle" />
                    
                    <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                        <nav>
                        <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
                        </ul>
                        </nav>
                    </div>
                    
                    <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                        <div class="auth flex items-center w-full md:w-full">
                        <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                        <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>
            <h1 style={{color}} className="text-lg text-center font-semibold py-4">React hooks</h1>
            <button className="hidden" type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            <button className="hidden" type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode'}</button>
        </div>
    )
}

export default Header
