import React, { forwardRef } from 'react'
import type {
  ReactNode,
  ReactElement,
  FunctionComponent,
  ComponentType,
} from 'react'

interface Props {
  children?: ReactNode
  forwardedRef?: any
}

export default function withRef(Component: ComponentType) {
  return forwardRef<JSX.Element, Props>((props, ref) => (
    <Component {...props} forwardedRef={ref} />
  ))
}
