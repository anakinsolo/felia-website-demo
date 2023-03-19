import * as React from "react";
import { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={15}
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m18.236 8-6.273 6.235.537.765L20 7.479 12.5 0l-.537.764L18.236 7H0v1h18.236Z"
      fill="#fff"
    />
  </svg>
);
export default SvgRightArrow;
