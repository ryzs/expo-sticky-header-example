import React, { forwardRef, ReactNode } from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

type Props = ViewStyle & {
  children?: ReactNode
  viewProps?: ViewProps
}

export const Box = forwardRef<View, Props>((props, ref) => {
  const { children, viewProps } = props

  return (
    <View style={props} {...viewProps} ref={ref}>
      {children}
    </View>
  )
})

