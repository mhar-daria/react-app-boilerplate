import type { ReactElement, ReactPortal, ReactNode, ReactChild } from 'react'

export type ReactText = string | number

export interface ReactNodeArray extends Array<ReactNode> {}
export type ReactFragment = {} | ReactNodeArray

export type PortalProps = {
  children: React.ReactNode | React.ReactChild
}

export type KeyboardEvent = {
  key: string
  target: EventTarget | null
}
