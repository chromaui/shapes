import styled from '@emotion/styled';

export const Box = styled.div`
  display: inline-block;
  height: ${props => `${props.h}px`};
  width: ${props => `${props.w}px`};
  border-radius: 2px;
  background: #eee;
`;

export const Oval = styled.div`
  display: inline-block;
  height: ${props => `${props.h}px`};
  width: ${props => `${props.w}px`};
  border-radius: 100%;
  background: #eee;
`;

export const Line = styled.span`
  display: inline-block;
  height: ${props => (props.h ? `${props.h}px` : '0.8em')};
  width: ${props => (props.w ? `${props.w}px` : 'auto')};
  line-height: 0.8em;
  overflow: hidden;
  border-radius: 1em;
  background: #eee;
  color: transparent;
  user-select: none;
  margin: 0.1em 0.4em 0.1em 0;
`;
