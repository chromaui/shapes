import { color } from '../tokens/palette';
import { fontFamily, fontSize, fontWeight } from '../tokens/typography';

export default {
  body: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.medium,
    color: color.darkest,

    margin: 0,
    overflowY: 'auto',
    overflowX: 'hidden',

    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'transparent',
    WebkitOverflowScrolling: 'touch',
  },

  '*': {
    boxSizing: 'border-box',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: fontWeight.extrabold,
    margin: 0,
    padding: 0,
  },

  'button, input, textarea, select': {
    outline: 'none',
    fontFamily: fontFamily.primary,
  },

  'sub, sup': {
    fontSize: '0.8em',
  },

  sub: {
    bottom: '-0.2em',
  },

  sup: {
    top: '-0.2em',
  },

  'b, em': {
    fontWeight: fontWeight.bold,
  },

  hr: {
    border: 'none',
    borderTop: `1px solid ${color.border}`,
    clear: 'both',
    marginBottom: '1.25rem',
  },

  'code, pre': {
    fontFamily: fontFamily.code,
    fontSize: fontSize.small,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  code: {
    display: 'inline-block',
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: 'baseline',
    color: color.secondary,
  },

  pre: {
    lineHeight: 18,
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    background: 'rgba(0, 0, 0, 0.05)',
    color: color.darkest,
    borderRadius: 3,
    margin: '1rem 0',
  },
};
