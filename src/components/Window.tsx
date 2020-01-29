import styled from '@emotion/styled';
import React, { SFC } from 'react';

import { color } from '../tokens/palette';
import Paper from './Paper';
import { Oval } from './Skeleton';

const Frame = styled(Paper)({
  padding: '1rem',
});

const Controls = styled.div({
  marginBottom: '1rem',
  lineHeight: '12px',
});

interface ControlProps {
  color: string;
}
const Control = styled(Oval)<ControlProps>(({ color }) => ({
  verticalAlign: 'top',
  background: color,
  marginRight: 8,
}));

interface Props {
  muted?: boolean;
}
const Window: SFC<Props> = ({ children, muted, ...props }) => (
  <Frame {...props}>
    <Controls>
      <Control width={12} height={12} color={muted ? color.medium : color.negative} />
      <Control width={12} height={12} color={muted ? color.medium : color.gold} />
      <Control width={12} height={12} color={muted ? color.medium : color.positive} />
    </Controls>
    {children}
  </Frame>
);

export default Window;
