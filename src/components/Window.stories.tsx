import React from 'react';
import Grid from './Grid';
import { Donut, Slice, T, Z } from './Shapes';

export default {
  title: 'Components / Window',
  component: Window,
  args: {
    muted: false,
  },
  parameters: {
    backgrounds: {
      default: 'app',
    },
  },
  loaders: [() => import('./Window')],
};

const Template = (args, { loaded }) => {
  const { default: Window } = loaded;
  return (
    <Window {...args}>
      <Grid cols={4}>
        <Slice />
        <Donut />
        <Z />
        <T />
      </Grid>
    </Window>
  );
};

export const Default = Template.bind({});

export const Muted = Template.bind({});

Muted.args = {
  muted: true,
};
