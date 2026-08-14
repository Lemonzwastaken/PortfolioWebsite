"use client"

import React from 'react'
import { BtnList } from '@/app/data';
import NavButton from './NavButton';
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {

  const angleIncrement = 360 / BtnList.length;
  const offsetX = '-120px';
  const offsetY = '-80px';

  return (
    <div className='w-full fixed h-screen flex items-center justify-center z-50 pointer-events-none'>
      <ResponsiveComponent>
        {({ size }) => {

          const isLarge = size >= 1024;
          const isMedium = size >= 768;

          return size && size >= 480 ? (
            <div className='relative w-0 h-0' style={{ transform: `translate(${offsetX}, ${offsetY})` }}>
              <div className='w-0 h-0 animate-spin-slow hover:pause group'>
                {BtnList.map((btn, index) => {

                  const angleRad = (index * angleIncrement * Math.PI) / 180;
                  const radius = isLarge
                    ? "calc(22vw - 1rem)"
                    : isMedium
                    ? "calc(28vw - 1rem)"
                    : "calc(35vw - 1rem)";
                  const x = `calc(${radius}*${Math.cos(angleRad)})`;
                  const y = `calc(${radius}*${Math.sin(angleRad)})`;

                  return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                })}
              </div>
            </div>
          ) : (
            <>
              <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
                {BtnList.slice(0, BtnList.length / 2).map((btn) => (
                  <NavButton key={btn.label} x="0px" y="0px" {...btn} />
                ))}
              </div>

              <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
                {BtnList.slice(BtnList.length / 2).map((btn) => (
                  <NavButton key={btn.label} x="0px" y="0px" {...btn} />
                ))}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;