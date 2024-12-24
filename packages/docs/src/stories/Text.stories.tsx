import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium in enim neque, eum, necessitatibus veritatis placeat aperiam doloremque similique nulla blanditiis non asperiores esse laborum quos soluta dolorum laudantium!'
  },

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}


export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}