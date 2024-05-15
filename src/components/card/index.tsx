import React from 'react'
import "./styles.scss";
import Button from '../button/button';
import Image from 'next/image';
import CheckIcon from '@/assets/check';
import LogoBlue from '@/assets/img-logo.png';
import { DownOutlined } from '@ant-design/icons';

function Card({ title, infos, handleAction, img: Img }: any) {
  return (
    <div className='card'>
      <div className='img-title-container'>
        <div className='img-container'>
          <Image src={Img} alt='auto' />
        </div>
        <div className='title-container'>
          <div className='alignToRigth'>
            <span className='flag'>
              <Image src={LogoBlue} alt="logoBP" />
              SEGURO<br /> AUTOS BP
            </span>
            <h3 className='title'>{title}</h3>
          </div>
        </div>
      </div>
      <div className='container-info'>
        {
          infos.map((item: any, index: number) => (
            <div key={item} className='itens-info'>
              <CheckIcon />
              <p>{item}</p>
            </div>
          ))
        }
        <p className='lastInfo'>E mais!</p>
      </div>

      <div className='container-btns'>
        <Button onClick={handleAction}>FAZER COTAÇÃO</Button>
        <Button withouBg={true}>Ver detalhes <DownOutlined /></Button>

      </div>
    </div >
  )
}

export default Card