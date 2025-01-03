import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@mxn-ignite-ui/react'
export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Text css={{ fontWeight: '$bold' }}>21 de Outubro - Indisponível</Text>
  },

} as Meta<TooltipProps>
export const Primary: StoryObj<TooltipProps> = {

}
