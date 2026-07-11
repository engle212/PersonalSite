import { useState } from 'react'

interface CarouselImageCardProps {
  imagePath: string;
  title: string;
}

function CarouselImageCard({ imagePath, title }: CarouselImageCardProps) {
  return (
    <div className="carousel-item border-effect">
      <img src={imagePath}/>
      <h2 className="card-text card-header">{title}</h2>

    </div>
  )
}

export default CarouselImageCard