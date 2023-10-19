import Carousel from '@/components/Carousel'
import React from 'react'
import hero1 from "../assets/arabic.webp";
import hero2 from "../assets/herophoto.webp";
import hero3 from "../assets/phil.webp";
import hero4 from "../assets/pakistan.webp";
import { Box } from '@mui/material';

const Hero = () => {

    const mySwiperStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
      };
    
      const mySlideStyle: React.CSSProperties = {
        
      };
    
      const myImageStyle: React.CSSProperties = {
        height: "100%",
        width: "100%"
      };
    
      const images = [
        hero1, hero2, hero3, hero4
      ];

  return (
<Box>
<Carousel swiperStyle={mySwiperStyle}
    slideStyle={mySlideStyle}
    imageStyle={myImageStyle}
    images={images} />
</Box>
  )
}

export default Hero