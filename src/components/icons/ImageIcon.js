import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgImageIcon(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3 21.949h-3.32a.75.75 0 010-1.5h3.32c2.527 0 4.16-1.727 4.16-4.399V7.899c0-2.673-1.633-4.399-4.16-4.399H7.65C5.129 3.5 3.5 5.226 3.5 7.899v8.151c0 2.672 1.629 4.399 4.15 4.399h.721a.75.75 0 010 1.5H7.65C4.271 21.949 2 19.578 2 16.05V7.899C2 4.371 4.271 2 7.65 2h8.65c3.386 0 5.66 2.371 5.66 5.899v8.151c0 3.528-2.274 5.899-5.66 5.899zM5.282 17.182a.75.75 0 01-.545-1.266l1.53-1.614c.407-.432.96-.67 1.554-.673.575.038 1.15.233 1.562.661l.88.898a.65.65 0 00.518.204.677.677 0 00.498-.249l2.23-2.712a2.444 2.444 0 011.782-.888 2.47 2.47 0 011.85.74l2.077 2.14a.75.75 0 01-1.078 1.045l-2.076-2.14a.894.894 0 00-.712-.286.926.926 0 00-.684.342l-2.23 2.712a2.187 2.187 0 01-1.59.795 2.243 2.243 0 01-1.655-.652l-.886-.904c-.13-.134-.296-.252-.48-.206a.651.651 0 00-.471.204l-1.53 1.615a.744.744 0 01-.544.234zm3.278-5.544a2.506 2.506 0 01-2.504-2.504A2.506 2.506 0 018.56 6.63a2.506 2.506 0 012.503 2.504 2.506 2.506 0 01-2.503 2.504zm0-3.508a1.005 1.005 0 10.002 2.009 1.005 1.005 0 00-.002-2.01z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgImageIcon;