import * as React from "react";

function Icon(props) {
  return (
    <svg
      width={99}
      height={87}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FF9C6E" stroke="#000" strokeWidth={4} d="M2 2h95v83H2z" />
      <g filter="url(#prefix__filter0_d_12:9)">
        <path
          d="M44.379 36.207l-2.652 15.6c-.21 1.65-.807 2.934-1.791 3.855-.976.92-2.238 1.372-3.788 1.354a11.9 11.9 0 01-2.05-.26l.314-3.145c.456.1.852.16 1.19.178 1.212.018 1.95-.638 2.214-1.969l2.68-15.613h3.883zm-3.514-3.76c-.018-.601.173-1.098.575-1.49.4-.401.916-.61 1.544-.629.63 0 1.144.187 1.545.56.41.374.625.848.643 1.422.018.611-.173 1.117-.574 1.518-.401.392-.916.597-1.545.615a2.186 2.186 0 01-1.518-.52c-.428-.364-.651-.856-.67-1.476zm11.389 3.473c1.376.036 2.488.588 3.336 1.654L57.04 30h3.868l-3.636 21h-3.446l.219-1.586c-1.103 1.285-2.388 1.91-3.855 1.873-.921-.009-1.728-.25-2.42-.724-.693-.474-1.23-1.154-1.614-2.038-.373-.893-.578-1.886-.615-2.98a11.21 11.21 0 01.041-1.668l.082-.615c.219-1.513.638-2.844 1.258-3.992.629-1.149 1.394-2.001 2.297-2.557.911-.556 1.923-.82 3.035-.793zm-2.803 7.957c-.073.693-.096 1.276-.068 1.75.091 1.604.738 2.42 1.941 2.447 1.085.046 2.028-.465 2.83-1.531l1.053-5.879c-.355-.975-1.066-1.486-2.133-1.531-.939-.028-1.722.337-2.351 1.094-.62.747-1.044 1.964-1.272 3.65z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_12:9"
          x={30.098}
          y={30}
          width={34.81}
          height={35.043}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12:9" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_12:9"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;