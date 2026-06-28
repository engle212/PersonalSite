import { useState } from 'react'

interface CardProps {
  title: string;
  content: string;
}

function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h2 className="card-text card-header">{title}</h2>
      <p className="card-text card-content">{content}</p>
    </div>
  )
}

export default Card