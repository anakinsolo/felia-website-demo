import * as React from "react";
import { SVGProps } from "react";
const SvgMenuClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1.414}
      width={31}
      height={2}
      rx={1}
      transform="rotate(45 1.414 0)"
      fill="#fff"
    />
    <rect
      width={31}
      height={2}
      rx={1}
      transform="scale(-1 1) rotate(45 -10.96 -26.46)"
      fill="#fff"
    />
  </svg>
);
export default SvgMenuClose;
