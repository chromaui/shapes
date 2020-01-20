import styled from '@emotion/styled';

interface Props {
  width: number | string;
  height: number | string;
}

const base = (props: Partial<Props>) => ({
  display: 'inline-block',
  verticalAlign: 'top',
  width: props.width || 'initial',
  height: props.height || 'initial',
  overflow: 'hidden',
  backgroundColor: '#eee',
});

export const Box = styled.div<Props>(base, {
  borderRadius: 2,
});

export const Oval = styled.div<Props>(base, {
  borderRadius: '100%',
});

export const Line = styled.span<Partial<Props>>(
  base,
  ({ width = 'auto', height = '0.8em' }) => ({
    width,
    height,
    lineHeight: '0.8em',
    margin: '0.1em 0.4em 0.1em 0',
  }),
  {
    verticalAlign: 'middle',
    borderRadius: '1em',
    userSelect: 'none',
    color: 'transparent',
  }
);
