import React from 'react'
import { motion } from 'framer-motion'
import { MotionableSvgIconProps } from '../types'

export function Spinner({ iconLabel, ...props }: MotionableSvgIconProps) {
  return (
    <motion.div {...props}>
      <svg viewBox="0 0 20 20" fill="currentColor" role="img" aria-labelledby="icon-spinner">
        <title id="icon-spinner">{iconLabel}</title>
        <path d="M10 20A10 10 0 011.88 4.17 1.38 1.38 0 014 4a1.39 1.39 0 01.12 1.8 7.24 7.24 0 1011.78 0A1.39 1.39 0 0116 4a1.38 1.38 0 012.11.18A10 10 0 0110 20z" />
        <path fill="none" d="M0 0h20v20H0z" />
      </svg>
    </motion.div>
  )
}
