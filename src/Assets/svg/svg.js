export const github = (
  <svg
    height="32"
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    width="32"
    data-view-component="true"
  >
    <path
      fillRule="evenodd"
      fill="#fff"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

export const linkedin = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
  </svg>
);

export const button = (color, hover) =>
  hover !== false ? (
    <svg
      width="209"
      height="99"
      viewBox="0 0 469 99"
      strokeWidth="1.5"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48.9999 98.0002H350.5" stroke={color} />
      <path d="M0.999939 67.0003L48.8042 98.0447" stroke={color} />
      <path d="M398.804 67L351 98.0444" stroke={color} />
      <path d="M398.804 32.0444L351 1" stroke={color} />
      <path d="M1 32.0445L48.8042 1.00004" stroke={color} />
      <path d="M1 68L1 32" stroke={color} />
      <path d="M399 68L399 32" stroke={color} />
      <path d="M49 1H350.5" stroke={color} />
      <path
        d="M90.0078 59V38.6364H92.4737V56.8125H101.94V59H90.0078ZM109.398 59V38.6364H121.688V40.8239H111.864V47.7045H121.051V49.892H111.864V56.8125H121.847V59H109.398ZM130.607 59H128.022L135.499 38.6364H138.045L145.522 59H142.937L136.852 41.858H136.693L130.607 59ZM131.562 51.0455H141.982V53.233H131.562V51.0455ZM152.334 59V38.6364H159.215C160.806 38.6364 162.112 38.9081 163.132 39.4517C164.153 39.9886 164.909 40.7277 165.399 41.669C165.89 42.6103 166.135 43.6809 166.135 44.8807C166.135 46.0805 165.89 47.1444 165.399 48.0724C164.909 49.0005 164.156 49.7296 163.142 50.2599C162.128 50.7836 160.832 51.0455 159.254 51.0455H153.686V48.8182H159.175C160.262 48.8182 161.137 48.6591 161.8 48.3409C162.469 48.0227 162.953 47.572 163.252 46.9886C163.557 46.3987 163.709 45.696 163.709 44.8807C163.709 44.0653 163.557 43.3527 163.252 42.7429C162.947 42.133 162.46 41.6624 161.79 41.331C161.121 40.9929 160.236 40.8239 159.135 40.8239H154.8V59H152.334ZM161.919 49.8523L166.931 59H164.067L159.135 49.8523H161.919ZM190.032 38.6364V59H187.646L176.549 43.0114H176.35V59H173.884V38.6364H176.271L187.407 54.6648H187.606V38.6364H190.032ZM210.121 38.6364H213.064L219.985 55.5398H220.224L227.144 38.6364H230.087V59H227.78V43.5284H227.581L221.218 59H218.991L212.627 43.5284H212.428V59H210.121V38.6364ZM255.853 48.8182C255.853 50.9659 255.465 52.822 254.69 54.3864C253.914 55.9508 252.85 57.1572 251.498 58.0057C250.146 58.8542 248.601 59.2784 246.865 59.2784C245.128 59.2784 243.583 58.8542 242.231 58.0057C240.879 57.1572 239.815 55.9508 239.039 54.3864C238.264 52.822 237.876 50.9659 237.876 48.8182C237.876 46.6705 238.264 44.8144 239.039 43.25C239.815 41.6856 240.879 40.4792 242.231 39.6307C243.583 38.7822 245.128 38.358 246.865 38.358C248.601 38.358 250.146 38.7822 251.498 39.6307C252.85 40.4792 253.914 41.6856 254.69 43.25C255.465 44.8144 255.853 46.6705 255.853 48.8182ZM253.467 48.8182C253.467 47.0549 253.172 45.5668 252.582 44.3537C251.999 43.1406 251.206 42.2225 250.205 41.5994C249.211 40.9763 248.098 40.6648 246.865 40.6648C245.632 40.6648 244.515 40.9763 243.514 41.5994C242.519 42.2225 241.727 43.1406 241.137 44.3537C240.554 45.5668 240.262 47.0549 240.262 48.8182C240.262 50.5814 240.554 52.0696 241.137 53.2827C241.727 54.4957 242.519 55.4138 243.514 56.0369C244.515 56.66 245.632 56.9716 246.865 56.9716C248.098 56.9716 249.211 56.66 250.205 56.0369C251.206 55.4138 251.999 54.4957 252.582 53.2827C253.172 52.0696 253.467 50.5814 253.467 48.8182ZM263.639 59V38.6364H270.52C272.111 38.6364 273.417 38.9081 274.438 39.4517C275.459 39.9886 276.214 40.7277 276.705 41.669C277.195 42.6103 277.441 43.6809 277.441 44.8807C277.441 46.0805 277.195 47.1444 276.705 48.0724C276.214 49.0005 275.462 49.7296 274.448 50.2599C273.434 50.7836 272.138 51.0455 270.56 51.0455H264.992V48.8182H270.48C271.568 48.8182 272.443 48.6591 273.105 48.3409C273.775 48.0227 274.259 47.572 274.557 46.9886C274.862 46.3987 275.014 45.696 275.014 44.8807C275.014 44.0653 274.862 43.3527 274.557 42.7429C274.252 42.133 273.765 41.6624 273.095 41.331C272.426 40.9929 271.541 40.8239 270.441 40.8239H266.105V59H263.639ZM273.225 49.8523L278.236 59H275.372L270.441 49.8523H273.225ZM285.19 59V38.6364H297.479V40.8239H287.656V47.7045H296.843V49.892H287.656V56.8125H297.639V59H285.19Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width="209"
      height="99"
      viewBox="0 0 469 99"
      strokeWidth="2.5"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48.9999 98.0002H350.5" stroke={color} />
      <path d="M0.999939 67.0003L48.8042 98.0447" stroke={color} />
      <path d="M398.804 67L351 98.0444" stroke={color} />
      <path d="M398.804 32.0444L351 1" stroke={color} />
      <path d="M1 32.0445L48.8042 1.00004" stroke={color} />
      <path d="M1 68L1 32" stroke={color} />
      <path d="M399 68L399 32" stroke={color} />
      <path d="M49 1H350.5" stroke={color} />
      <path
        d="M90.0078 59V38.6364H92.4737V56.8125H101.94V59H90.0078ZM109.398 59V38.6364H121.688V40.8239H111.864V47.7045H121.051V49.892H111.864V56.8125H121.847V59H109.398ZM130.607 59H128.022L135.499 38.6364H138.045L145.522 59H142.937L136.852 41.858H136.693L130.607 59ZM131.562 51.0455H141.982V53.233H131.562V51.0455ZM152.334 59V38.6364H159.215C160.806 38.6364 162.112 38.9081 163.132 39.4517C164.153 39.9886 164.909 40.7277 165.399 41.669C165.89 42.6103 166.135 43.6809 166.135 44.8807C166.135 46.0805 165.89 47.1444 165.399 48.0724C164.909 49.0005 164.156 49.7296 163.142 50.2599C162.128 50.7836 160.832 51.0455 159.254 51.0455H153.686V48.8182H159.175C160.262 48.8182 161.137 48.6591 161.8 48.3409C162.469 48.0227 162.953 47.572 163.252 46.9886C163.557 46.3987 163.709 45.696 163.709 44.8807C163.709 44.0653 163.557 43.3527 163.252 42.7429C162.947 42.133 162.46 41.6624 161.79 41.331C161.121 40.9929 160.236 40.8239 159.135 40.8239H154.8V59H152.334ZM161.919 49.8523L166.931 59H164.067L159.135 49.8523H161.919ZM190.032 38.6364V59H187.646L176.549 43.0114H176.35V59H173.884V38.6364H176.271L187.407 54.6648H187.606V38.6364H190.032ZM210.121 38.6364H213.064L219.985 55.5398H220.224L227.144 38.6364H230.087V59H227.78V43.5284H227.581L221.218 59H218.991L212.627 43.5284H212.428V59H210.121V38.6364ZM255.853 48.8182C255.853 50.9659 255.465 52.822 254.69 54.3864C253.914 55.9508 252.85 57.1572 251.498 58.0057C250.146 58.8542 248.601 59.2784 246.865 59.2784C245.128 59.2784 243.583 58.8542 242.231 58.0057C240.879 57.1572 239.815 55.9508 239.039 54.3864C238.264 52.822 237.876 50.9659 237.876 48.8182C237.876 46.6705 238.264 44.8144 239.039 43.25C239.815 41.6856 240.879 40.4792 242.231 39.6307C243.583 38.7822 245.128 38.358 246.865 38.358C248.601 38.358 250.146 38.7822 251.498 39.6307C252.85 40.4792 253.914 41.6856 254.69 43.25C255.465 44.8144 255.853 46.6705 255.853 48.8182ZM253.467 48.8182C253.467 47.0549 253.172 45.5668 252.582 44.3537C251.999 43.1406 251.206 42.2225 250.205 41.5994C249.211 40.9763 248.098 40.6648 246.865 40.6648C245.632 40.6648 244.515 40.9763 243.514 41.5994C242.519 42.2225 241.727 43.1406 241.137 44.3537C240.554 45.5668 240.262 47.0549 240.262 48.8182C240.262 50.5814 240.554 52.0696 241.137 53.2827C241.727 54.4957 242.519 55.4138 243.514 56.0369C244.515 56.66 245.632 56.9716 246.865 56.9716C248.098 56.9716 249.211 56.66 250.205 56.0369C251.206 55.4138 251.999 54.4957 252.582 53.2827C253.172 52.0696 253.467 50.5814 253.467 48.8182ZM263.639 59V38.6364H270.52C272.111 38.6364 273.417 38.9081 274.438 39.4517C275.459 39.9886 276.214 40.7277 276.705 41.669C277.195 42.6103 277.441 43.6809 277.441 44.8807C277.441 46.0805 277.195 47.1444 276.705 48.0724C276.214 49.0005 275.462 49.7296 274.448 50.2599C273.434 50.7836 272.138 51.0455 270.56 51.0455H264.992V48.8182H270.48C271.568 48.8182 272.443 48.6591 273.105 48.3409C273.775 48.0227 274.259 47.572 274.557 46.9886C274.862 46.3987 275.014 45.696 275.014 44.8807C275.014 44.0653 274.862 43.3527 274.557 42.7429C274.252 42.133 273.765 41.6624 273.095 41.331C272.426 40.9929 271.541 40.8239 270.441 40.8239H266.105V59H263.639ZM273.225 49.8523L278.236 59H275.372L270.441 49.8523H273.225ZM285.19 59V38.6364H297.479V40.8239H287.656V47.7045H296.843V49.892H287.656V56.8125H297.639V59H285.19Z"
        // fill={`${color}99`}
        fill={color}
      />
    </svg>
  );

export const arrowLeft = (color) => (
  <svg
    version="1.0"
    x="0px"
    y="0px"
    viewBox="0 0 162 70.28"
    style={{ width: 32.5 }}
    fill="#c4b998"
  >
    <circle fill="#fff" cx="31.57" cy="35.21" r="11.57"></circle>
    <g>
      <polygon
        fill="#fff"
        points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
      ></polygon>
      <rect x="84.61" y="29.76" fill="#fff" width="65" height="11.06"></rect>
    </g>
  </svg>
);
export const arrowRight = (color) => (
  <svg
    version="1.0"
    x="0px"
    y="0px"
    viewBox="0 0 162 70.28"
    style={{ width: 32.5, transform: `rotate(180deg)` }}
    fill="#c4b998"
  >
    <circle fill="#fff" cx="31.57" cy="35.21" r="11.57"></circle>
    <g>
      <polygon
        fill="#fff"
        points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
      ></polygon>
      <rect x="84.61" y="29.76" fill="#fff" width="65" height="11.06"></rect>
    </g>
  </svg>
);

export const moon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 84 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M81.6632 40C81.6632 60.9034 63.9153 78 41.8316 78C19.7479 78 2 60.9034 2 40C2 19.0966 19.7479 2 41.8316 2C63.9153 2 81.6632 19.0966 81.6632 40Z"
      stroke="#fff"
      strokeWidth="4"
    />
    <ellipse cx="26.1447" cy="48" rx="5.22895" ry="5" fill="#fff" />
    <ellipse cx="56.9957" cy="26.5" rx="13.0724" ry="12.5" fill="#fff" />
    <ellipse cx="45.4919" cy="60.5" rx="2.61448" ry="2.5" fill="#fff" />
    <ellipse cx="22.4844" cy="27.5" rx="2.61448" ry="2.5" fill="#fff" />
  </svg>
);

export const arrowButtonRight = () => (
  <svg
    width="30"
    height="60"
    viewBox="0 0 13 30"
    fill="none"
    style={{ transform: `rotate(180deg)` }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 29L1.5 16L12 1.5" stroke="#fff" strokeWidth="1" />
  </svg>
);

export const arrowButtonLeft = () => (
  <svg
    width="30"
    height="60"
    viewBox="0 0 13 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 29L1.5 16L12 1.5" stroke="#fff" strokeWidth="1" />
  </svg>
);

export const arrowDown = () => (
  <svg
    width="10"
    height="20"
    viewBox="0 0 13 30"
    style={{ transform: `rotate(-90deg)` }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 29L1.5 16L12 1.5" stroke="#000" strokeWidth="3" />
  </svg>
);

export const closeButton = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26.5 25.5L1 1" stroke="#fff" strokeWidth={1.3}/>
    <path d="M25.5 0.5L1 26" stroke="#fff" strokeWidth={1.3}/>
  </svg>
);
