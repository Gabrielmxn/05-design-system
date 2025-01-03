import { X } from "phosphor-react";
import { Heading } from "../Heading";
import { ComponentProps, useEffect, useState } from 'react'
import { Text } from "../Text";
import { CloseToast, ToastContainer } from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  open?: boolean
}



export function Toast({ open = true }: ToastProps) {
  const [isHidden, setIsHidden] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => setIsHidden(!isHidden), 200); // Esconde depois de 200ms
    return () => clearTimeout(timeout);
  }, [open])
  return (
    <ToastContainer data-state={open} isHidden={isHidden}>
      <Heading css={{ fontSize: "$xl" }}>
        Agendamento realizado
      </Heading>
      <Text css={{ fontSize: "$sm", color: "$gray200" }}>Quarta-feira, 23 de Outubro às 16h</Text>

      <CloseToast />
    </ToastContainer>
  )
}

