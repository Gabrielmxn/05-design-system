
import { ComponentProps, ReactNode } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('span', {
  display: 'inline-block',
  position: 'relative',
  padding: "$3 $4",
  backgroundColor: "$gray900",
  color: "$gray100",
  borderRadius: "$md",

  "&::before": {
    position: 'absolute',
    content: '',
    bottom: -9,
    left: '50%',
    backgroundColor: "$gray900",
    height: "$6",
    width: "$6",
    transform: "translate(-50%, 0) rotate(45deg)",
    zIndex: -1,
  }
})


export interface TooltipProps extends ComponentProps<typeof Tooltip> { }