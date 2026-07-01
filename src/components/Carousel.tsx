import { useState } from 'react'
import CarouselItem from './CarouselItem'
import littleShopImage from '../assets/images/littleShop.jpg';
import xpBGImage from '../assets/images/xpBG.jpg';

function Carousel() {
  return (
    <div className="carousel">
      <CarouselItem imagePath={littleShopImage} title="Hello World1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at."/>
      <CarouselItem imagePath={xpBGImage} title="Hello World2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at."/>
      <CarouselItem imagePath={littleShopImage} title="Hello World3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at."/>
      <CarouselItem imagePath={xpBGImage} title="Hello World4" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at."/>
    </div>
  )
}

export default Carousel