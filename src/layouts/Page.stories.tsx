import React from 'react';
import Page from './Page';
import { Oval } from '../components/Skeleton';
import { Line, Lines } from '../components/Skeleton.stories';

export default {
  title: 'layouts|Page',
};

export const Default = () => (
  <Page
    header={
      <>
        <Line />
        <Oval width={30} height={30} />
        <Line />
      </>
    }
  >
    <div style={{ margin: '1rem' }}>
      <Lines />
    </div>
  </Page>
);
