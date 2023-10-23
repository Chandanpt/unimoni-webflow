import Carousel from '@/components/Carousel'
import React from 'react'
import hero1 from "../assets/arabic.webp";
import hero2 from "../assets/herophoto.webp";
import hero3 from "../assets/phil.webp";
import hero4 from "../assets/pakistan.webp";
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CurrencyExchanger from '@/components/CurrencyExchanger';
import India from "../assets/Property 1=India.png";

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
<Box sx={{position: "relative"}}>
<Carousel swiperStyle={mySwiperStyle}
    slideStyle={mySlideStyle}
    imageStyle={myImageStyle}
    images={images} />
</Box>
    <Box position="absolute" top="0" display="flex" justifyContent="center" width="100%" zIndex="2">
      <Box maxWidth="1300px">
      <Image src="file:///C:/Users/Asus/Downloads/New%20folder/images/ULogoW.svg" alt="Logo" height={36} width={1600} />
      <Box margin="250px 100px 100px" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
        <Typography sx={{fontSize: "60px", fontWeight: "900", color: "#ffffff", marginBottom: "8px"}}>Send money home
all over the globe</Typography>
<Typography sx={{color: "#ffffff", fontSize: "20px", fontWeight: "400"}}>Enjoy excellent exchange rates for 17 currencies</Typography>
        </Box>
        <CurrencyExchanger flagSvg={India} currency={""} code={""} />
      </Box>
      </Box>
    </Box>
</Box>
  )
}

export default Hero