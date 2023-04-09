import { Montserrat as customFont } from 'next/font/google'

export const font = customFont({
  weight: ['400', '700'],
  variable: '--custom-font',
  subsets: ['latin']
  // preload: false
})