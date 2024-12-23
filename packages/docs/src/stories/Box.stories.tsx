import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel debitis corrupti suscipit sint nemo, provident exercitationem, similique ducimus nostrum facilis optio earum libero repudiandae, nesciunt veritatis soluta eligendi. Quisquam.P</Text>
  },

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
