import { SVGAttributes } from 'react'

export function DownloadIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.62506 11.1104L8.62506 -2.6061e-05L7.37506 -2.61703e-05L7.37506 11.1104L4.69153 8.43249L3.80856 9.31729L8.00006 13.5L12.1915 9.31729L11.3086 8.43249L8.62506 11.1104Z"
        fill={props.color ? props.color : '#FB8F26'}
      />
      <path
        d="M12.375 13.5V14.75H3.625V13.5H2.375V16H13.625V13.5H12.375Z"
        fill={props.color ? props.color : '#FB8F26'}
      />
    </svg>
  )
}
