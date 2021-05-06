import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Inner, Outer } from './pin-styles'
import { useCallback, useRef, useState } from 'react'
import { tumbler as tumblerState } from 'state'
import { useRecoilState } from 'recoil'
import { useSpring } from 'react-spring'
import { useWheel } from 'react-use-gesture'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[]
}

export function Pin({ children, ...rest }: Props): ReactElement {
  const outerRef = useRef<HTMLDivElement>(null)
  const [pinHeight, setPinHeight] = useState(1)
  const [targetDepth, setTargetDepth] = useState(0)
  const [pinScroll, setPinScroll] = useRecoilState(tumblerState.pinScroll)

  const innerHeightRef = useCallback((el: HTMLDivElement) => {
    if (!el) return

    setPinHeight(el.offsetHeight)
    setTargetDepth((el.children[1] as HTMLParagraphElement).offsetTop)
  }, [])

  const style = useSpring({
    y: pinScroll * pinHeight - targetDepth,
  })

  useWheel(
    ({ xy: [, scrollY] }) => {
      setPinScroll((scrollY / pinHeight) * -1)
    },
    {
      domTarget: outerRef,
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
