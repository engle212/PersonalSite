import { useState } from 'react'

interface CarouselItemProps {
  imagePath: string;
  title: string;
  content: string;
}

function CarouselItem({ imagePath, title, content }: CarouselItemProps) {
  return (
    <div className="carousel-item">
      <img src={imagePath}/>
      <h2 className="card-text card-header">{title}</h2>

    </div>
  )
}

export default CarouselItem