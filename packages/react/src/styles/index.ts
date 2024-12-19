import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
  lineHeights,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'spance',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    raddi: radii,
    space,
  },
})
