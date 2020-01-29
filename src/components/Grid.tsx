import styled from '@emotion/styled';

interface Props {
  cols: number;
}

export default styled.div<Partial<Props>>(({ cols = 1 }) => ({
  display: 'inline-grid',
  gridGap: '1rem',
  gridTemplateColumns: `repeat(${cols}, auto)`,
  justifyItems: 'center',
  alignItems: 'center',
}));
