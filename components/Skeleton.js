import styled from '@emotion/styled';

const base = ({ width, height }) => ({
  display: 'inline-block',
  width,
  height,
  overflow: 'hidden',
  backgroundColor: '#eee',
});

export const Box = styled.div(base, {
  borderRadius: 2,
});

export const Oval = styled.div(base, {
  borderRadius: '100%',
});

export const Line = styled.span(
  base,
  ({ width = 'auto', height = '0.8em' }) => ({
    width,
    height,
    lineHeight: '0.8em',
    margin: '0.1em 0.4em 0.1em 0',
  }),
  {
    borderRadius: '1em',
    userSelect: 'none',
    color: 'transparent',
  }
);
