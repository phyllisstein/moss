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

    setPinHeight(el.scrollHeight)

    const target = el.children[2] as HTMLParagraphElement
    target.style.color = 'hsl(357, 100%, 74%)'

    setTargetDepth(target.offsetTop)
  }, [])

  const style = useSpring({
    y: `${ ((pinScroll * targetDepth) / pinHeight) * -100 }%`,
  })

  useWheel(
    ({ xy: [_, scrollY] }) => {
      setPinScroll(scrollY / pinHeight)
    },
    {
      domTarget: outerRef,
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
