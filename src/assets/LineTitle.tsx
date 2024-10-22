import * as React from "react";
import type { SVGProps } from "react";

interface ILineTitle extends SVGProps<SVGSVGElement> {
  color?: string;
}

function LineTitle({ color = "#2B50BB", ...props }: ILineTitle) {
  return (
    <svg
      className="line-title"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={26}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path fill={color} d="M7.04 0H13L6.01 25.97 0 26 7.04 0Z" />
      </g>
    </svg>
  );
}

export default LineTitle;
