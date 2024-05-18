import * as React from "react"
import { SVGProps } from "react"
const LineTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={26}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#2B50BB" d="M7.04 0H13L6.01 25.97 0 26 7.04 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h13v26H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default LineTitle
