import React from 'react';
import Image from 'next/image';

import WhiteLogo from '../../assets/whiteLogo.png';

import './styles.scss';
import { InstagramFilled } from '@ant-design/icons';
import ZapIcon from '@/assets/ZapIcon';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_logo'>
        <Image src={WhiteLogo} alt='logo bp' />
      </div>

      <div className='footer_container-contant'>
        <div className='footer_contant'>
          <h3>Contatos</h3>
          <p> <InstagramFilled className="footer_icon" /> arenabemprotege</p>
          <p> <ZapIcon className="footer_icon"/> 11 96561-8576</p>
        </div>

        <div className='footer_contant'>
          <p>0800 042 0800</p>
          <p>0800 944 5000</p>
        </div>
      </div>

      <div className='foooter_container-copy-right'>
        <h3 className='footer_copy-right'>2024 - © Todos  os direitos reservados</h3>
      </div>
    </div>
  )
}

export default Footer;