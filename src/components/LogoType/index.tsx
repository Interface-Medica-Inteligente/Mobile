import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
    >
      <Circle cx={60} cy={60} r={60} fill="#258E8B" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5 33v53h15V33h-15zM74.5 33v53h15V33h-15z"
        fill="#00CEC8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.5 64.393l-15-15V33h-15v22.607l2.197 2.196 22.5 22.5 5.303 5.304 5.303-5.304 22.5-22.5 2.197-2.196V33h-15v16.393l-15 15z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.5 33v53h15V33h-15z"
        fill="#00CEC8"
      />
    </Svg>
  )
}

export default SvgComponent
