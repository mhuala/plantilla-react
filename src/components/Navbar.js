import React, {useEffect,useState} from 'react';
import logo from '../images/header-logo.png'

export const Navbar = props => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
   
    return(
    <div className="bg-gray-400 px-2 py-2">
        <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row items-center ">  
                <img src={logo} alt="Logo" className="h-10 px-4"/>
                <span className="text-gray-600 text-5xl font-semibold rounded">My</span>
                <span className="text-gray-800 text-5xl font-bold rounded">Portfolio</span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="block text-gray-200 hover:text-white focus:outline-none md:hidden">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
            </button>
            <div className=" flex flex-row hidden md:flex">
            <a href="/1" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600">Link 1</a>
            <a href="/2" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600">Link 2</a>
            </div>
        </div>
        <div className={isMenuOpen ? 'hidden' : 'flex flex-col md:hidden'} >
        <a href="/1" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600">Link 1</a>
        <a href="/2" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600">Link 2</a>
        </div>
    </div>
    )
}