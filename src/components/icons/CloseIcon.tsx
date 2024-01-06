/* eslint-disable max-len */
import React from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
  customClassname?: string
  onClick?: () => void
}

const CloseIcon = ({ color = '#060708', width = 12, height = 12, customClassname, onClick }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-[${color}] ${customClassname} transition-all duration-200 cursor-pointer`}
      onClick={onClick}
    >
      <path d="M12 1.67999L10.32 0L5.99999 4.32L1.67999 0L0 1.67999L4.32 5.99999L0 10.32L1.67999 12L5.99999 7.68L10.32 12L12 10.32L7.68 5.99999L12 1.67999Z" />
    </svg>
  )
}

export default CloseIcon
