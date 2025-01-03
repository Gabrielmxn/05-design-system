import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Toast, ToastProps } from '@mxn-ignite-ui/react'
export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    open: true,

  },
  decorators: [
    (Story) => {
      return (
        <>

          {Story()}
        </>
      )
    },
  ],
  argTypes: {
    onClick: {
      action: 'click',
    },
  }

} as Meta<ToastProps>
export const Primary: StoryObj<ToastProps> = {

}
