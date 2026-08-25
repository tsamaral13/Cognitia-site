import React from 'react';

export const LogoMark = ({ className = '' }) => (
  <img
    src={`${import.meta.env.BASE_URL}cognitia-nome-logo.png`}
    alt=""
    aria-hidden="true"
    width="1619"
    height="971"
    className={`object-contain ${className}`}
  />
);

export default function Logo({ className = '' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}cognitia-nome-logo.png`}
      alt="Cognitia — Soluções Inteligentes"
      width="1619"
      height="971"
      className={`h-[3.7rem] w-auto object-contain md:h-[4.6rem] ${className}`}
    />
  );
}
