import React, { memo } from 'react'

interface Props {
  color?: string
  width?: number
  height?: number
}

const FacebookIcon = ({ color = '#9DA4B0', width = 15, height = 16 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M9.99905 3.48867H11.3684V1.10367C11.1322 1.07117 10.3197 0.998047 9.37342 0.998047C7.39905 0.998047 6.04655 2.23992 6.04655 4.52242V6.62305H3.8678V9.2893H6.04655V15.998H8.7178V9.28992H10.8084L11.1403 6.62367H8.71717V4.7868C8.7178 4.01617 8.9253 3.48867 9.99905 3.48867Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="15" height="15" fill="white" transform="translate(0.000976562 0.998047)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(FacebookIcon)
