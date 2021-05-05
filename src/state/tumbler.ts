import { atom } from 'recoil'

export const pinHeight = atom({
  default: 1,
  key: 'tumbler:pin-height',
})

export const pinScroll = atom({
  default: '0%',
  key: 'tumbler:pin-scroll',
})
