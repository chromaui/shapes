import styled from '@emotion/styled';
import { darken, rgba } from 'polished';

import { color } from '../tokens/palette';
import { fontFamily, fontSize, fontWeight } from '../tokens/typography';

export enum Appearance {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface Props {
  appearance: keyof typeof Appearance;
  size: keyof typeof Size;
  outline: boolean;
  compact: boolean | 'left' | 'right';
  wide: boolean;
  disabled: boolean;
}

const focusShadow = (
  { appearance = Appearance.primary, outline = false }: Partial<Props>,
  hover = false
) => {
  const shadows = outline ? [`${color[appearance]} 0 0 0 1px inset`] : [];
  shadows.push(`${rgba(color[appearance], 0.4)} 0 ${hover ? '4px 15px 0px' : '1px 9px 2px'}`);
  return shadows.join(', ');
};

export default styled.button<Partial<Props>>(
  ({ appearance = Appearance.primary, wide = false, outline = false, disabled = false }) => ({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wide ? '100%' : 'auto',
    border: 0,
    borderRadius: '3em',
    textAlign: 'center',
    textDecoration: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    margin: 0,
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.extrabold,
    lineHeight: '1',
    transition: 'all 150ms ease-out',
    transform: 'translate3d(0, 0, 0)',
    verticalAlign: 'top',
    userSelect: 'none',
    opacity: 1,

    fill: 'currentColor',
    color: outline ? color[appearance] : color.lightest,
    background: outline ? 'transparent' : color[appearance],
    boxShadow: outline ? `${color[appearance]} 0 0 0 1px inset` : 'none',

    ...(appearance === Appearance.tertiary && { color: outline ? color.dark : color.darkest }),

    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      background: outline ? 'transparent' : darken(0.05, color[appearance]),
      boxShadow: outline
        ? `${darken(0.05, color[appearance])} 0 0 0 1px inset`
        : 'rgba(0, 0, 0, 0.2) 0 2px 6px 0',
    },
    '&:active': {
      transform: 'translate3d(0, 0, 0)',
    },
    '&:focus': {
      boxShadow: focusShadow({ appearance, outline }),
    },
    '&:focus:hover': {
      boxShadow: focusShadow({ appearance, outline }, true),
    },

    '& > *:not(:first-child)': { marginLeft: 10 },

    ...(disabled && {
      cursor: 'not-allowed',
      opacity: 0.5,
      '&:hover': {
        transform: 'none',
      },
    }),
  }),
  ({ size = Size.medium, compact = false }) =>
    ({
      small: {
        height: 28,
        padding: '0 16px',
        fontSize: fontSize.smaller,
        ...(compact === true && { padding: '0 6px' }),
        ...(compact === 'left' && { paddingLeft: 6 }),
        ...(compact === 'right' && { paddingRight: 6 }),
      },
      medium: {
        height: 40,
        padding: '0 20px',
        fontSize: fontSize.small,
        ...(compact === true && { padding: '0 12px' }),
        ...(compact === 'left' && { paddingLeft: 12 }),
        ...(compact === 'right' && { paddingRight: 12 }),
      },
      large: {
        height: 48,
        padding: '0 32px',
        fontSize: fontSize.medium,
        ...(compact === true && { padding: '0 16px' }),
        ...(compact === 'left' && { paddingLeft: 16 }),
        ...(compact === 'right' && { paddingRight: 16 }),
      },
    }[size])
);
