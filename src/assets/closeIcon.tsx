import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

export const CloseIcon: React.FC<Props> = ({
  height = 16,
  width = 15,
  color = '#B3B3B3',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      {...others}>
      <Path
        d="M14.272 13.192v-.001L9.878 8.959h0l-.992-.943 5.384-5.174c.113-.109.205-.23.263-.364.057-.131.092-.275.092-.42a.919.919 0 00-.092-.432 1.13 1.13 0 00-.241-.362h0l-.002-.002a1.357 1.357 0 00-.376-.24 1.225 1.225 0 00-.445-.077c-.15 0-.298.033-.445.087h0a1.164 1.164 0 00-.367.243l-6.2 5.958c-.103.1-.184.221-.24.353h0l-.001.001a1.156 1.156 0 00-.091.43c0 .144.034.288.091.42.057.13.138.252.242.352l6.199 5.958h0v.001a1.18 1.18 0 001.591-.022c.217-.208.333-.474.333-.761a1.044 1.044 0 00-.31-.773z"
        fill={color}
        stroke={color}
        strokeWidth={0.1}
      />
      <Path
        d="M.718 2.799h0l4.393 4.232h0l.992.943L.718 13.15a1.063 1.063 0 00-.355.783c0 .152.022.297.092.432.057.13.137.262.241.362h0l.002.002c.112.097.237.185.375.24.14.056.3.078.446.078.15 0 .298-.034.445-.088h0c.14-.056.265-.144.367-.242l6.2-5.958c.103-.1.184-.222.24-.353h0l.001-.002c.057-.14.091-.284.091-.429 0-.144-.034-.288-.091-.42a1.087 1.087 0 00-.242-.353L2.332 1.243h0a1.179 1.179 0 00-1.591.021 1.043 1.043 0 00-.333.762c-.011.288.104.564.31.773z"
        fill={color}
        stroke={color}
        strokeWidth={0.1}
      />
    </Svg>
  );
};