import { useState } from 'react'

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <div className="carousel">
      {children}
    </div>
  )
}

export default Carousel