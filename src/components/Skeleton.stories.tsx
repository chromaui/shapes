import React from 'react';

import * as Skeleton from './Skeleton';

export default {
  title: 'Components / Skeleton',
};

export const Box = () => <Skeleton.Box width={100} height={100} />;
export const Oval = () => <Skeleton.Oval width={100} height={100} />;
export const Line = () => <Skeleton.Line width={100} />;
export const Lines = () => (
  <>
    <div style={{ fontSize: '0.75em' }}>
      <Skeleton.Line>Lorem ipsum</Skeleton.Line>
      <Skeleton.Line>is placeholder text</Skeleton.Line>
      <Skeleton.Line>commonly used</Skeleton.Line>
    </div>
    <Skeleton.Line>in the graphic,</Skeleton.Line>
    <Skeleton.Line>print,</Skeleton.Line>
    <Skeleton.Line>and publishing</Skeleton.Line>
    <Skeleton.Line>industries</Skeleton.Line>
    <div style={{ fontSize: '1.3em' }}>
      <Skeleton.Line>for previewing</Skeleton.Line>
      <Skeleton.Line>layouts</Skeleton.Line>
      <Skeleton.Line>and visual mockups.</Skeleton.Line>
    </div>
  </>
);
