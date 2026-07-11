import { useState } from 'react'

interface CarouselTextCardProps {
  title: string;
  subtitle: string;
}

function CarouselTextCard({ title, subtitle }: CarouselTextCardProps) {
  return (
    <div className="carousel-item border-effect">
      <h2 className="card-text card-header">{title}</h2>
      <h3 className="card-text">{subtitle}</h3>
    </div>
  )
}

export default CarouselTextCard