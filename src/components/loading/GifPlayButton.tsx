// GifPlayButton.tsx
import React from 'react';

const GifPlayButton = () => (
  <svg
    width='50'
    height='50'
    viewBox='0 0 60 60'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <ellipse
        fill='#000'
        opacity='0.45'
        cx='30'
        cy='30'
        rx='30'
        ry='30'
      ></ellipse>
      <ellipse
        stroke='#FFF'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.5'
        cx='30'
        cy='30'
        rx='26'
        ry='26'
      ></ellipse>
    </g>
    <svg x='16' y='18.5'>
      <g fill='#fff'>
        <path d='M12.8422852,12.9814453 L12.8422852,11.3994141 L7.63916016,11.3994141 L7.63916016,13.0517578 L10.9086914,13.0517578 L10.9086914,13.3242188 C10.8911133,15.2050781 9.46728516,16.4707031 7.39306641,16.4707031 C5.01123047,16.4707031 3.51708984,14.625 3.51708984,11.6367188 C3.51708984,8.70117188 5.00244141,6.84667969 7.34912109,6.84667969 C9.08056641,6.84667969 10.284668,7.68164062 10.7768555,9.2109375 L12.7543945,9.2109375 C12.3237305,6.64453125 10.2319336,5.00976562 7.34912109,5.00976562 C3.79833984,5.00976562 1.50439453,7.61132812 1.50439453,11.6542969 C1.50439453,15.75 3.77197266,18.3076172 7.36669922,18.3076172 C10.6889648,18.3076172 12.8422852,16.2246094 12.8422852,12.9814453 Z M17.5180664,18 L17.5180664,5.31738281 L15.5493164,5.31738281 L15.5493164,18 L17.5180664,18 Z M22.659668,18 L22.659668,12.7441406 L28.1088867,12.7441406 L28.1088867,11.0039062 L22.659668,11.0039062 L22.659668,7.11035156 L28.6098633,7.11035156 L28.6098633,5.31738281 L20.690918,5.31738281 L20.690918,18 L22.659668,18 Z'></path>
      </g>
    </svg>
  </svg>
);

export default GifPlayButton;
