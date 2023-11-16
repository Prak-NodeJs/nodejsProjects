import './Menu.css'
import { PiCrownSimpleThin } from 'react-icons/pi'
import { GoTrophy, GoGift } from 'react-icons/go'
import { RiStore2Line } from 'react-icons/ri'
import { LiaGreaterThanSolid } from 'react-icons/lia'
/* eslint-disable */
export default function Menu() {
    return (
        <div className="menu_container">
            <span className='traingle'>^</span>
            <div className='button_container'>
                <div className='top_navbar'>
                    <div className='top_navbar_item'>
                        <PiCrownSimpleThin className='top_navbar_icon'></PiCrownSimpleThin>
                        <p>Exclusive At Croma</p>
                    </div>
                    <hr className='line_break' />
                    <div className="top_navbar_item">
                        <GoTrophy className='top_navbar_icon'></GoTrophy>
                        <p>Top Brands</p>
                        <LiaGreaterThanSolid className='arrow' />
                    </div>
                    <hr className='line_break' />
                    <div className="top_navbar_item">
                        <RiStore2Line className='top_navbar_icon'></RiStore2Line>
                        <p>Croma Store Locator</p>
                    </div>
                    <hr className='line_break' />
                    <div className="top_navbar_item">
                        <GoGift className='top_navbar_icon'></GoGift>
                        <>Gift Cards</>
                    </div>
                </div>

                <div className='bottom_navbar_container'>
                    <h5>Shop By Category</h5>

                    <div className='bottom_navbar'>

                        <div className='bottom_navbar_item'>
                            <p>Televisions & Accessories</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Home Appliancess</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />
                        </div>
                        <div className="bottom_navbar_item">
                            <p>Phones & Wearables</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Computers & Tablets</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Kitchen Appliancess</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Audio & Video</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Health & Fitness</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Grooming & Personal</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Cameras & Accessories</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Smart Devices</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Gaming</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Acceessories</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                        <div className="bottom_navbar_item">
                            <p>Zipcare</p>
                            <LiaGreaterThanSolid className='bottom_arrow' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
