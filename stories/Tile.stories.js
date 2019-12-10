import React from 'react';
import { storiesOf } from '@storybook/react';
import { storyNameFromExport } from '@storybook/csf';

import Tile from '../components/Tile';
import * as ShapesStories from './Shapes.stories';

const stories = storiesOf('components|Tile', module);

for (const story of Object.keys(ShapesStories)) {
  if (story !== 'default') {
    stories.add(storyNameFromExport(story), () => <Tile>{ShapesStories[story]()}</Tile>);
  }
}
