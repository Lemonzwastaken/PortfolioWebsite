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
              <div
                className="fixed top-0 h-screen py-20 flex flex-col justify-between pointer-events-auto"
                style={{ left: 'max(2rem, env(safe-area-inset-left))' }}
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => (
                  <div key={btn.label} className="relative w-14 h-14">
                    <NavButton x="0px" y="0px" side="left" {...btn} />
                  </div>
                ))}
              </div>

              <div
                className="fixed top-0 h-screen py-20 flex flex-col justify-between pointer-events-auto"
                style={{ right: 'max(2rem, env(safe-area-inset-right))' }}
              >
                {BtnList.slice(BtnList.length / 2).map((btn) => (
                  <div key={btn.label} className="relative w-14 h-14">
                    <NavButton x="0px" y="0px" side="right" {...btn} />
                  </div>
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