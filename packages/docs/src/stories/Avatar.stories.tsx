import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabrielmxn.png',
    alt: 'Gabriel Alves',
  },
} as Meta<AvatarProps>
export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}