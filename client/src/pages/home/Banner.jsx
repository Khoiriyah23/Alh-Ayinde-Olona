import React from 'react'
import { Link } from 'react-router-dom';
import contractorImg from '../../assets/manimg.webp'

const Banner = () => {
  return (
    <div className='section__container header__container'>
            <div className='header__content z-30'>
                <h4>Up to @0% Discount on</h4>
                <h1>C Materials</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto 
                    quaerat veritatis deleniti sunt tempore qui, quas a ratione sapiente,
                     dignissimos placeat ullam officiis. Similique odio accusantium modi
                      debitis voluptas neque.</p>
                <button className='btn'>
                   <Link to='/shop'> Explore Now</Link>
                </button>
            </div>

            <div className='header__image'><img src={contractorImg} alt="banner image" /></div>
    </div>
  )
}

export default Banner;