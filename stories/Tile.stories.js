import React from 'react';

import Tile from '../components/Tile';

export default {
  title: 'components|Tile',
  decorators: [storyFn => <Tile>{storyFn()}</Tile>],
};

export * from './Shapes.stories';
