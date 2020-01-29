import styled from '@emotion/styled';

import { color } from '../tokens/palette';

export enum Appearance {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum Size {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extralarge = 'extralarge',
  huge = 'huge',
}

interface Props {
  appearance: keyof typeof Appearance;
  size: keyof typeof Size;
}

const sizes = {
  tiny: 16,
  small: 20,
  medium: 28,
  large: 40,
  extralarge: 80,
  huge: 120,
};

export default styled.div<Partial<Props>>(
  ({ appearance = Appearance.tertiary, size = Size.medium }) => ({
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'top',
    width: sizes[size],
    height: sizes[size],
    backgroundColor: color[appearance],
    borderRadius: sizes[size],
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      zIndex: 1,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '&::before': {
      position: 'absolute',
      top: '20%',
      content: '""',
      display: 'block',
      borderRadius: sizes[size],
      width: Math.round(sizes[size] * 0.35),
      height: Math.round(sizes[size] * 0.35),
      background: color.lightest,
      opacity: 0.7,
    },
    '&::after': {
      position: 'absolute',
      top: '60%',
      content: '""',
      display: 'block',
      borderRadius: sizes[size],
      width: Math.round(sizes[size] * 0.75),
      height: Math.round(sizes[size] * 0.75),
      background: color.lightest,
      opacity: 0.7,
    },
  })
);
