import React, { memo } from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

const LayoutGridIcon = ({ color = '#B3B8C2', width = 12, height = 12 }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 12" fill="none">
      <g clip-path="url(#clip0_3226_3490)">
        <path
          d="M2.5 0H0.5C0.224 0 0 0.224 0 0.5V2.5C0 2.776 0.224 3 0.5 3H2.5C2.776 3 3 2.776 3 2.5V0.5C3 0.224 2.776 0 2.5 0Z"
          fill={color}
        />
        <path
          d="M2.5 4.5H0.5C0.224 4.5 0 4.724 0 5V7C0 7.276 0.224 7.5 0.5 7.5H2.5C2.776 7.5 3 7.276 3 7V5C3 4.724 2.776 4.5 2.5 4.5Z"
          fill={color}
        />
        <path
          d="M2.5 9H0.5C0.224 9 0 9.224 0 9.5V11.5C0 11.776 0.224 12 0.5 12H2.5C2.776 12 3 11.776 3 11.5V9.5C3 9.224 2.776 9 2.5 9Z"
          fill={color}
        />
        <path
          d="M7 0H5C4.724 0 4.5 0.224 4.5 0.5V2.5C4.5 2.776 4.724 3 5 3H7C7.276 3 7.5 2.776 7.5 2.5V0.5C7.5 0.224 7.276 0 7 0Z"
          fill={color}
        />
        <path
          d="M7 4.5H5C4.724 4.5 4.5 4.724 4.5 5V7C4.5 7.276 4.724 7.5 5 7.5H7C7.276 7.5 7.5 7.276 7.5 7V5C7.5 4.724 7.276 4.5 7 4.5Z"
          fill={color}
        />
        <path
          d="M7 9H5C4.724 9 4.5 9.224 4.5 9.5V11.5C4.5 11.776 4.724 12 5 12H7C7.276 12 7.5 11.776 7.5 11.5V9.5C7.5 9.224 7.276 9 7 9Z"
          fill={color}
        />
        <path
          d="M11.5 0H9.5C9.224 0 9 0.224 9 0.5V2.5C9 2.776 9.224 3 9.5 3H11.5C11.776 3 12 2.776 12 2.5V0.5C12 0.224 11.776 0 11.5 0Z"
          fill={color}
        />
        <path
          d="M11.5 4.5H9.5C9.224 4.5 9 4.724 9 5V7C9 7.276 9.224 7.5 9.5 7.5H11.5C11.776 7.5 12 7.276 12 7V5C12 4.724 11.776 4.5 11.5 4.5Z"
          fill={color}
        />
        <path
          d="M11.5 9H9.5C9.224 9 9 9.224 9 9.5V11.5C9 11.776 9.224 12 9.5 12H11.5C11.776 12 12 11.776 12 11.5V9.5C12 9.224 11.776 9 11.5 9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3226_3490">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(LayoutGridIcon)
