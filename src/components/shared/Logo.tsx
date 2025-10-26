import * as React from "react";
import { SVGProps } from "react";

const BASESVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7071 35.4142C27.4865 35.4142 35.4142 27.4865 35.4142 17.7071C35.4142 7.92775 27.4865 0 17.7071 0C7.92772 0 0 7.92775 0 17.7071C0 27.4865 7.92772 35.4142 17.7071 35.4142ZM23.2311 8.24872C23.5 7.2936 22.5731 6.72882 21.7266 7.3319L9.90988 15.7501C8.99186 16.4041 9.13626 17.7071 10.1268 17.7071H13.2385V17.683H19.303L14.3615 19.4265L12.1831 27.1655C11.9142 28.1206 12.841 28.6854 13.6876 28.0823L25.5043 19.6642C26.4224 19.0102 26.2779 17.7071 25.2874 17.7071H20.5687L23.2311 8.24872Z"
      fill="#F97316"
    />
  </svg>
);
export default BASESVG;
