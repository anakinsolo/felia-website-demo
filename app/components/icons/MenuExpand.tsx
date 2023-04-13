import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenuExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={24}
    viewBox="0 0 31 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={31} height={2} rx={1} fill="#fff" />
    <rect y={22} width={31} height={2} rx={1} fill="#fff" />
    <rect y={11} width={20} height={2} rx={1} fill="#fff" />
  </svg>
);
export default SvgMenuExpand;
