import styled from '@emotion/styled';
import { color } from '../tokens/palette';

interface Props {
  interactive: boolean;
}

export default styled.div<Partial<Props>>(({ interactive = false }) => ({
  background: color.lightest,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  borderRadius: 5,
  transition: 'all 150ms ease-out',
  transform: 'translate3d(0, 0, 0)',
  overflow: 'auto',
  verticalAlign: 'top',

  ...(interactive && {
    cursor: 'default',
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
      zIndex: 1,
    },
    '&:active': {
      transform: 'translate3d(0, 0, 0)',
    },
  }),
}));
