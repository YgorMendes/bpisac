import Image from 'next/image'
import React from 'react'
import './styles.scss';

interface ICardInfo {
  img: {
    src: any
    alt: string
  }
  title: string
  text: string
}

function CardInfo({
  img,
  title,
  text
}: ICardInfo) {
  return (
    <div className='cardInfo'>
      <Image className='cardInfo_img' src={img.src} alt={img.alt} />

      <div className='cardInfo_container'>
        <h3 className='cardInfo_title'>{title}</h3>
        <p className='cardInfo_info'>{text}</p>
      </div>
    </div>
  )
}

export default CardInfo