import React from 'react';
import Avatar from './Avatar';
import Grid from './Grid';

export default {
  title: 'Components / Avatar',
  component: Avatar,
};

export const Sizes = () => (
  <Grid cols={6}>
    <Avatar size="tiny" />
    <Avatar size="small" appearance="primary" />
    <Avatar size="medium" appearance="secondary" />
    <Avatar size="large" />
    <Avatar size="extralarge" appearance="primary" />
    <Avatar size="huge" appearance="secondary" />

    <Avatar size="tiny">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />
    </Avatar>
    <Avatar size="small">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />
    </Avatar>
    <Avatar size="medium">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />
    </Avatar>
    <Avatar size="large">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />
    </Avatar>
    <Avatar size="extralarge">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />{' '}
    </Avatar>
    <Avatar size="huge">
      <img src="https://avatars1.githubusercontent.com/u/321738?s=460&v=4" />
    </Avatar>

    <Avatar size="tiny">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
    <Avatar size="small">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
    <Avatar size="medium">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
    <Avatar size="large">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
    <Avatar size="extralarge">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
    <Avatar size="huge">
      <img src="https://picsum.photos/id/237/536/354" />
    </Avatar>
  </Grid>
);
