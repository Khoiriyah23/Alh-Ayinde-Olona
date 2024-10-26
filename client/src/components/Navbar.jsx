import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li className='link'><Link to="/">Home</Link></li>
          <li className='link'><Link to="/shop">Shop</Link></li>
          <li className='link'><Link to="/pages">Pages</Link></li>
          <li className='link'><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav__logo">
          <Link to="/">Abu<span>.</span></Link>
        </div>

        <div className="nav__icons relative">
          <span>
            <Link to="/search">
              {/* Inline SVG for Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
                className="icon-search"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769
                 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032
                  20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 
                  12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 
                  11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
            </Link>
          </span>

          <span>
            <button className='hover:text-primary'>
            <i className="ri-shopping-basket-line"></i>
                    <sup className='text-sm inline-block px-1.5
                     text-white rounded-full
                      bg-primary text-center'>0</sup>
            </button>
          </span>

          <span>
            <Link to='login'>
            <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
