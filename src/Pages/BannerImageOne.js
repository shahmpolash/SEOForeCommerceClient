import React, { useEffect, useState } from 'react';
import './BannerImageOne.css';

const BannerImageOne = () => {
   
    const [banners, setBanners] = useState([]);


    useEffect(() => {
        fetch(`https://ecommerceseonew-99d8d5c72bb6.herokuapp.com/banner-one`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);
    return (
        <div>
            {
                banners.map( banner => 
                    <img className='w-full my-4' src={banner.bannerImageOne} alt="Banner One"></img>
                    )
            }
        </div>
    );
};

export default BannerImageOne;