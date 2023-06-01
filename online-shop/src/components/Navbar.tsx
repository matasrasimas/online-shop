import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    return (
      <>
        <header className='main-hdr'>
            <img src={logo} alt='logo'/>
            <div className='main-hdr-search'>
               <input type='text' placeholder='Search...'/>
               <FontAwesomeIcon icon={faMagnifyingGlass} className='main-hdr-search-icon' />
            </div>
            
            <div className='user-cnt'>

                  <div className='icon-cnt'>
                    <FontAwesomeIcon icon={faUser} className='icon-cnt-icon'/>
                    <p>Account</p>
                  </div>

               

                  <div className='icon-cnt'>
                    <FontAwesomeIcon icon={faHeart} className='icon-cnt-icon'/>
                    <p>Wishlist</p>
                 </div>



                  <div className='icon-cnt'>
                     <FontAwesomeIcon icon={faCartShopping} className='icon-cnt-icon'/>
                     <p>Cart</p>
                  </div>


               <div className='hamburger-cnt' onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faBars} className='icon-cnt-icon'/>
                 <div className='dropdown'>
                   <ul className={`dropdown-items ${showDropdown ? 'open' : ''}`}>
                     <li>Account</li>
                     <li>Wishlist</li>
                     <li>Cart</li>
                   </ul>
                 </div>

               </div>                            
               
            </div>
        </header>


        <div className='catalog'>
           <ul className='catalog-items'>
              <li>
               Keyboards
              </li>
              <li>
               Mouses
              </li>
              <li>
               Headsets
              </li>
              <li>
               Controllers
              </li>
              <li>
               Monitors
              </li>
           </ul> 
        </div>
      </>
    );
}

export default Navbar;