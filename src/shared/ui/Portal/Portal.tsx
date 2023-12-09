import { type ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element: Element | DocumentFragment
}

export const Portal: FC<PortalProps> = ({ children, element }) => {
  return createPortal(children, element)
}
