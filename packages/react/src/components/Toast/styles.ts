import { X } from "phosphor-react";
import { styled } from "../../styles";
import { keyframes } from "@stitches/react";

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  to: {
    transform: 'translateY(-100%)',
  },
  from: {
    transform: 'translateY(0)',
  },
})

export const ToastContainer = styled('div', {
  padding: "$3 $5",
  maxWidth: "22.5rem",
  position: 'relative',
  borderRadius: '$sm',
  display: "flex",
  gap: "$2",
  flexDirection: "column",
  backgroundColor: "$gray800",
  border: "1px solid $colors$gray600",
  '&[data-state="true"]': {
    animation: `${slideIn} 300ms ease-out`,
    
  },
  '&[data-state="false"]': {
    animation: `${slideOut} 300ms ease-out`,
  },
  variants: {
    isHidden: {
      true: {
        display: 'none'
      }
    }
  }
})



export const CloseToast = styled(X, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: "$5",
  height: "$5",
  color: "$gray200",
  cursor: "pointer",
  
})

