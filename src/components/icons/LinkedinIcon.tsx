import React, { memo } from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

const LinkedinIcon = ({ color = '#9DA4B0', width = 18, height = 18 }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
      <path
        d="M16.2015 16.1994V10.9254C16.2015 8.33339 15.6435 6.35339 12.6195 6.35339C11.1615 6.35339 10.1895 7.14539 9.79351 7.90139H9.75751V6.58739H6.89551V16.1994H9.88351V11.4294C9.88351 10.1694 10.1175 8.96339 11.6655 8.96339C13.1955 8.96339 13.2135 10.3854 13.2135 11.5014V16.1814H16.2015V16.1994Z"
        fill={color}
      />
      <path d="M2.03271 6.5874H5.02071V16.1994H2.03271V6.5874Z" fill={color} />
      <path
        d="M3.5278 1.79956C2.5738 1.79956 1.7998 2.57356 1.7998 3.52756C1.7998 4.48156 2.5738 5.27356 3.5278 5.27356C4.4818 5.27356 5.2558 4.48156 5.2558 3.52756C5.2558 2.57356 4.4818 1.79956 3.5278 1.79956Z"
        fill={color}
      />
    </svg>
  )
}

export default memo(LinkedinIcon)
