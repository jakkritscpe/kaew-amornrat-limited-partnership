const HeroIllustration = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 580 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient shading: darker blue → lighter blue-silver */}
        <linearGradient id="isoFloor" x1="290" y1="360" x2="290" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B4D5EB" stopOpacity="0.1" />
          <stop offset="1" stopColor="#B4D5EB" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="rackFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#8FBDD9" stopOpacity="0.9" />
          <stop offset="1" stopColor="#5A9ABF" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="rackSide" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop stopColor="#4A8AAD" stopOpacity="0.65" />
          <stop offset="1" stopColor="#3A7595" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="rackTop" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop stopColor="#A8D0E8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#8FBDD9" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="slotFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#3A7595" stopOpacity="0.6" />
          <stop offset="1" stopColor="#2C5F7A" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="swFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#8FBDD9" stopOpacity="0.85" />
          <stop offset="1" stopColor="#6DAAC8" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="swSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#4A8AAD" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3A7595" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="swTop" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#B4D5EB" stopOpacity="0.9" />
          <stop offset="1" stopColor="#A8D0E8" stopOpacity="0.8" />
        </linearGradient>
        <filter id="fShadow" x="-15%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="3" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.2" />
        </filter>
        <filter id="sShadow" x="-10%" y="-10%" width="120%" height="125%">
          <feDropShadow dx="2" dy="5" stdDeviation="7" floodColor="#000" floodOpacity="0.15" />
        </filter>
        <filter id="ledGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ===== ISOMETRIC PLATFORM ===== */}
      <path d="M290 460 L530 340 L290 365 L50 340 Z" fill="url(#isoFloor)" />
      <ellipse cx="290" cy="395" rx="230" ry="48" fill="#B4D5EB" opacity="0.04" />

      {/* ===== MAIN SERVER RACK (white) ===== */}
      <g filter="url(#fShadow)">
        <path d="M380 110 L450 75 L450 335 L380 370Z" fill="url(#rackSide)" />
        <path d="M230 110 L380 110 L380 370 L230 370Z" fill="url(#rackFront)" />
        <path d="M230 110 L300 75 L450 75 L380 110Z" fill="url(#rackTop)" />

        {/* Drive bays */}
        {[0,1,2,3,4,5,6].map((i) => (
          <g key={`bay-${i}`}>
            <rect x="240" y={122 + i * 34} width="130" height="26" rx="3" fill="url(#slotFill)" />
            <rect x="248" y={128 + i * 34} width="72" height="4" rx="2" fill="#B4D5EB" opacity="0.2" />
            <rect x="248" y={135 + i * 34} width="48" height="3" rx="1.5" fill="#B4D5EB" opacity="0.15" />
            <rect x="330" y={126 + i * 34} width="30" height="18" rx="2" fill="#5A9ABF" opacity="0.15" stroke="#B4D5EB" strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="356" cy={131 + i * 34} r="3" fill="#4ADE80" filter="url(#ledGlow)">
              <animate attributeName="opacity" values="1;0.35;1" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="346" cy={131 + i * 34} r="2" fill="#38BDF8" filter="url(#ledGlow)">
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur={`${0.5 + i * 0.15}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Side ventilation */}
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <line key={`v-${i}`} x1="392" y1={95 + i * 26} x2="438" y2={78 + i * 26} stroke="#5A9ABF" strokeWidth="1.5" opacity="0.12" />
        ))}
      </g>

      {/* ===== SECOND RACK (behind, smaller, white) ===== */}
      <g filter="url(#sShadow)" opacity="0.65">
        <path d="M210 165 L265 138 L265 340 L210 365Z" fill="url(#rackSide)" />
        <path d="M100 165 L210 165 L210 365 L100 365Z" fill="url(#rackFront)" />
        <path d="M100 165 L155 138 L265 138 L210 165Z" fill="url(#rackTop)" />

        {[0,1,2,3,4,5].map((i) => (
          <g key={`bay2-${i}`}>
            <rect x="108" y={176 + i * 30} width="94" height="22" rx="2" fill="url(#slotFill)" />
            <circle cx="192" cy={184 + i * 30} r="2.5" fill="#4ADE80" filter="url(#ledGlow)">
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* ===== NETWORK SWITCH (front, flat, white) ===== */}
      <g filter="url(#sShadow)">
        <path d="M180 395 L220 378 L430 378 L390 395Z" fill="url(#swTop)" />
        <path d="M180 395 L390 395 L390 418 L180 418Z" fill="url(#swFront)" />
        <path d="M390 395 L430 378 L430 400 L390 418Z" fill="url(#swSide)" />

        {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
          <rect key={`port-${i}`} x={195 + i * 15} y="400" width="10" height="11" rx="1.5" fill="#B4D5EB" opacity="0.5" />
        ))}
        {[0,1,2,3,4,5,6,7].map((i) => (
          <circle key={`pled-${i}`} cx={200 + i * 15} cy="398" r="1.5" fill="#4ADE80" filter="url(#ledGlow)">
            <animate attributeName="opacity" values="0.9;0.15;0.9" dur={`${0.3 + i * 0.08}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx="370" cy="406" r="3" fill="#4ADE80" filter="url(#ledGlow)" />
      </g>

      {/* ===== CABLES (subtle) ===== */}
      <g opacity="0.1" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M230 370 Q220 390 200 395" stroke="#B4D5EB" />
        <path d="M380 370 Q385 385 390 395" stroke="#B4D5EB" />
        <path d="M210 365 Q215 380 220 395" stroke="#B4D5EB" strokeDasharray="3 3">
          <animate attributeName="strokeDashoffset" values="0;-6" dur="1.2s" repeatCount="indefinite" />
        </path>
        <path d="M150 340 Q160 360 180 395" stroke="#B4D5EB" strokeDasharray="3 3">
          <animate attributeName="strokeDashoffset" values="0;-6" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* ===== AMBIENT GLOW ===== */}
      <ellipse cx="355" cy="250" rx="12" ry="120" fill="#4ADE80" opacity="0.035" />
      <ellipse cx="345" cy="250" rx="8" ry="120" fill="#38BDF8" opacity="0.025" />

      {/* ===== FLOOR REFLECTIONS ===== */}
      <g opacity="0.04">
        <rect x="232" y="372" width="148" height="25" rx="2" fill="#B4D5EB" />
        <rect x="102" y="367" width="108" height="18" rx="2" fill="#B4D5EB" />
      </g>
    </svg>
  );
};

export default HeroIllustration;
