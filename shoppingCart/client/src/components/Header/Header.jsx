import { useEffect, useState } from 'react'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { FaLocationPin } from 'react-icons/fa6'
import './header.css'
import Menu from '../Menu/Menu'
import Account from '../Account/Account'
/* eslint-disable */

export default function Header() {
    const [menuClicked, setMenuClicked] = useState(false)
    const [userLocation, setUserLocation] = useState('')
    const [userAccountClicked, setuserAccountClicked] = useState(false)

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked)
        if (!menuClicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    const handleAccountClicked = () => {
        setuserAccountClicked(!userAccountClicked)
        if (!menuClicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    const handleCloseAccount = () => {
        setuserAccountClicked(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=0e4f1a6d0cec438280a4069429734270", requestOptions)
            .then(response => response.json())
            .then(result => setUserLocation(result.city.name + ' ' + result.state.name))
            .catch(error => console.log('error', error));
    })

    return (
        <div>
            <div className='header-container'>
                <div className='header'>
                    <div className='header_heading'>
                        <a href="">
                            <img className='logo' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="logo" /></a>
                    </div>
                    <div className='menu'>
                        {menuClicked ? (<AiOutlineClose className='icon-menu' onClick={handleMenuClick} />) : (<AiOutlineMenu className='icon-menu' onClick={handleMenuClick} />)}
                        <p>Menu</p>
                    </div>
                    <div className='search-div'>
                        <input className='searchInput' type="text" placeholder='What are you looking for ?' id="search" />
                        <BsSearch className='icon search-icon'></BsSearch>
                    </div>
                    <div className='header-right'>
                        <div className='set-location'>
                            <FaLocationPin />
                            <p style={{ fontSize: '12px' }}>{userLocation}</p>
                        </div>
                        <div className='account'>
                            <BsFillPersonFill onClick={handleAccountClicked} />
                        </div>
                        <div className='cart'>
                            <CgShoppingCart />
                            <div className='badge'>0</div>
                        </div>
                    </div>
                </div>

            </div >
            {menuClicked && <Menu />}
            {userAccountClicked && <Account onClose={handleCloseAccount} />}
        </div>
    )
}
