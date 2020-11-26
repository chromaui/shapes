import React, { ReactNode } from 'react';
import { DecoratorFunction } from '@storybook/addons';

import Tile from '../components/Tile';

const withTile: DecoratorFunction<ReactNode> = storyFn => <Tile>{storyFn()}</Tile>;

export default {
  title: 'Components / Tile',
  decorators: [withTile],
};

export * from './Shapes';
