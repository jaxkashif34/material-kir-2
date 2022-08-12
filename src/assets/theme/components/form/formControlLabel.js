// import colors and typography
import colors from '../../base/colors';
import typography from '../../base/typography';
// import pxToRem function
import { pxToRem } from '../../functions';

// destructure dark from colors
const { dark } = colors;
// destructure size and fontWeightBold from typography
const { size, fontWeightBold } = typography;

export default {
  styleOverrides: {
    root: {
      display: 'block',
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },
    label: {
      display: 'inline-block',
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      '&.Mui-disabled': {
        color: dark.main,
      },
    },
  },
};
