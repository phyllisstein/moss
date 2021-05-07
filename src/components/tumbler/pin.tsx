import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Inner, Outer } from './pin-styles'
import { useCallback, useRef, useState } from 'react'
import { tumbler as tumblerState } from 'state'
import { useRecoilState } from 'recoil'
import { useSpring } from 'react-spring'
import { useWheel } from 'react-use-gesture'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactNode[]
  primary?: boolean
}

export function Pin({
  children,
  primary = false,
  ...rest
}: Props): ReactElement {
  const outerRef = useRef<HTMLDivElement>(null)
  const [pinHeight, setPinHeight] = useState(1)
  const [targetDepth, setTargetDepth] = useState(0)
  const [pinScroll, setPinScroll] = useRecoilState(tumblerState.pinScroll)

  const innerHeightRef = useCallback((el: HTMLDivElement) => {
    if (!el) return

    setPinHeight(el.offsetHeight)
    setTargetDepth((el.children[3] as HTMLParagraphElement).offsetTop)
  }, [])

  const style = useSpring({
    y: `${ pinScroll * (targetDepth / pinHeight) * -100 }%`,
  })

  useWheel(
    ({ xy: [, scrollY] }) => {
      setPinScroll(scrollY / pinHeight)
    },
    {
      domTarget: outerRef,
      enabled: primary,
    },
  )

  return (
    <Outer { ...rest } ref={ outerRef }>
      <Inner ref={ innerHeightRef } style={ style }>
        { children }
      </Inner>
    </Outer>
  )
}
