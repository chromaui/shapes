import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface Props {
  color?: string;
  style?: CSSProperties;
}

const Shape = styled.svg<Props>(({ color }) => ({
  height: 100,
  maxWidth: 100,
  fill: color,
  verticalAlign: 'top',
}));

export const Donut = (props: Props) => (
  <Shape viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" color="#37D5D3" {...props}>
    <path d="M45 0c24.853 0 45 20.147 45 45S69.853 90 45 90 0 69.853 0 45 20.147 0 45 0zm.5 27C35.283 27 27 35.283 27 45.5S35.283 64 45.5 64 64 55.717 64 45.5 55.717 27 45.5 27z" />
  </Shape>
);

export const L = (props: Props) => (
  <Shape viewBox="0 0 55 89" xmlns="http://www.w3.org/2000/svg" color="#66BF3C" {...props}>
    <path d="M55 3v83a3 3 0 01-3 3H3a3 3 0 01-3-3V64a3 3 0 013-3h21a3 3 0 003-3V3a3 3 0 013-3h22a3 3 0 013 3z" />
  </Shape>
);

export const Slice = (props: Props) => (
  <Shape viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" color="#FF4785" {...props}>
    <path d="M92 89V3c0-3-2.056-3-3-3C39.294 0 0 39.294 0 89c0 0 0 3 3 3h86a3 3 0 003-3z" />
  </Shape>
);

export const Square = (props: Props) => (
  <Shape
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    color="#1EA7FD"
    {...props}
    style={{ borderRadius: 5, ...props.style }}
  >
    <path d="M0 0h90v90H0z" />
  </Shape>
);

export const Triangle = (props: Props) => (
  <Shape viewBox="0 0 96 88" xmlns="http://www.w3.org/2000/svg" color="#FFAE00" {...props}>
    <path d="M50.63 1.785l44.928 81.77A3 3 0 0192.928 88H3.072a3 3 0 01-2.629-4.445l44.929-81.77a3 3 0 015.258 0z" />
  </Shape>
);

export const T = (props: Props) => (
  <Shape viewBox="0 0 92 62" xmlns="http://www.w3.org/2000/svg" color="#FC521F" {...props}>
    <path d="M63 3v25a3 3 0 003 3h23a3 3 0 013 3v25a3 3 0 01-3 3H3a3 3 0 01-3-3V34a3 3 0 013-3h24a3 3 0 003-3V3a3 3 0 013-3h27a3 3 0 013 3z" />
  </Shape>
);

export const Z = (props: Props) => (
  <Shape viewBox="0 0 56 90" xmlns="http://www.w3.org/2000/svg" color="#6F2CAC" {...props}>
    <path d="M28 3v25a3 3 0 003 3h22a3 3 0 013 3v53a3 3 0 01-3 3H31a3 3 0 01-3-3V62a3 3 0 00-3-3H3a3 3 0 01-3-3V3a3 3 0 013-3h22a3 3 0 013 3z" />
  </Shape>
);
