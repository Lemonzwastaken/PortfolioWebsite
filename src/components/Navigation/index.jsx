import React from 'react'
import { BtnList } from '@/app/data';
import NavButton from './NavButton';

const Navigation = () => {

  const angleIncrement = 360 / BtnList.length;
  const offsetX = '-120px';
  const offsetY = '-80px';

  return (
    <div className='w-full fixed h-screen flex items-center justify-center z-50 pointer-events-none'>
      <div className='relative w-0 h-0' style={{ transform: `translate(${offsetX}, ${offsetY})` }}
      >
        <div className='w-0 h-0 animate-spin-slow hover:pause group'>
          {
            BtnList.map((btn, index) => {

              const angleRad = (index * angleIncrement * Math.PI) / 180
              const radius = 'calc(27vw - 1rem)'
              const cos = Math.cos(angleRad).toFixed(4);
              const sin = Math.sin(angleRad).toFixed(4);
              const x = `calc(${radius}*${cos})`;
              const y = `calc(${radius}*${sin})`;

              return <NavButton key={btn.label} x={x} y={y} {...btn} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Navigation