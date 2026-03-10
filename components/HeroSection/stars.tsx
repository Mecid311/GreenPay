import React, { useId, type CSSProperties } from 'react';

type StarProps = { size?: number; style?: CSSProperties };

export const GlowStarLarge = ({ size = 240, style }: StarProps) => {
  const rid = useId();
  const fid = `gsl_${rid}`;

  return (
    <svg
      width={size}
      height={size * 1.504}
      viewBox="0 0 583 877"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <filter
          id={fid}
          x="-52%"
          y="-0.5%"
          width="160%"
          height="101%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="bg" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a1"
          />
          <feGaussianBlur stdDeviation="6.72" in="a1" result="b1" />
          <feColorMatrix
            in="b1"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c1"
          />
          <feBlend in="c1" in2="bg" result="r1" />

          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a2"
          />
          <feGaussianBlur stdDeviation="67.15" in="a2" result="b2" />
          <feColorMatrix
            in="b2"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c2"
          />
          <feBlend in="c2" in2="r1" result="r2" />

          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a3"
          />
          <feGaussianBlur stdDeviation="167.89" in="a3" result="b3" />
          <feColorMatrix
            in="b3"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c3"
          />
          <feBlend in="c3" in2="r2" result="r3" />

          <feBlend in="SourceGraphic" in2="r3" result="shape" />
        </filter>
      </defs>

      <g opacity="0.38" filter={`url(#${fid})`}>
        <path
          d="M143.688 335.771C144.835 392.002 190.144 437.311 246.375 438.459C190.144 439.607 144.835 484.916 143.688 541.146C142.54 484.916 97.2305 439.607 41 438.459C97.2305 437.311 142.54 392.002 143.688 335.771Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const GlowStarSmall = ({ size = 160, style }: StarProps) => {
  const rid = useId();
  const fid = `gss_${rid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <filter
          id={fid}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="bg" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a1"
          />
          <feGaussianBlur stdDeviation="3.44" in="a1" result="b1" />
          <feColorMatrix
            in="b1"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c1"
          />
          <feBlend in="c1" in2="bg" result="r1" />

          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a2"
          />
          <feGaussianBlur stdDeviation="34.4" in="a2" result="b2" />
          <feColorMatrix
            in="b2"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c2"
          />
          <feBlend in="c2" in2="r1" result="r2" />

          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="a3"
          />
          <feGaussianBlur stdDeviation="86" in="a3" result="b3" />
          <feColorMatrix
            in="b3"
            type="matrix"
            values="0 0 0 0 .067 0 0 0 0 .369 0 0 0 0 .278 0 0 0 1 0"
            result="c3"
          />
          <feBlend in="c3" in2="r2" result="r3" />

          <feBlend in="SourceGraphic" in2="r3" result="shape" />
        </filter>
      </defs>

      <g opacity="0.38" filter={`url(#${fid})`}>
        <path
          d="M224.707 172.08C225.295 200.898 248.516 224.118 277.333 224.707C248.516 225.295 225.295 248.515 224.707 277.333C224.119 248.515 200.898 225.295 172.081 224.707C200.898 224.118 224.119 200.898 224.707 172.08Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const SharpStar = ({ size = 18, style }: StarProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path
      d="M12 0.5C12.22 7.5 16.5 11.78 23.5 12C16.5 12.22 12.22 16.5 12 23.5C11.78 16.5 7.5 12.22 0.5 12C7.5 11.78 11.78 7.5 12 0.5Z"
      fill="#0d3b2e"
    />
  </svg>
);