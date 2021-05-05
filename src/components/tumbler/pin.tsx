import { config, useSpring } from 'react-spring'
import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Inner, Outer } from './pin-styles'
import { useCallback, useRef, useState } from 'react'
import { tumbler as tumblerState } from 'state'
import { useRecoilState } from 'recoil'
import { useWheel } from 'react-use-gesture'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[]
  primary?: boolean
}

export function Pin({ children, primary, ...rest }: Props): ReactElement {
  const outerRef = useRef<HTMLDivElement>(null)
  const [pinHeight, setPinHeight] = useRecoilState(tumblerState.pinHeight)
  const [pinScroll, setPinScroll] = useRecoilState(tumblerState.pinScroll)

  const innerHeightRef = useCallback((el: HTMLDivElement) => {
    if (!el) return

    primary && setPinHeight(el.offsetHeight)
  }, [])

  const style = useSpring({
    config: config.stiff,
    y: pinScroll,
  })

  useWheel(
    ({ xy: [, scrollY] }) => {
      const scrollPercentage = `${ (scrollY / pinHeight) * 100 }%`
      setPinScroll(scrollPercentage)
    },
    {
      domTarget: outerRef,
      enabled: primary,
    },
  )

  return (
    <Outer ref={ outerRef }>
      <Inner { ...rest } ref={ innerHeightRef } style={ style }>
        { children }
      </Inner>
    </Outer>
  )
}
