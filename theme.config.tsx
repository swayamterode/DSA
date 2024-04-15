import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

// const logo = (
//   <svg width="196" height="34" viewBox="0 0 670 116" fill="none">
//     <path
//       d="M50.7588 0.876332C42.9004 -0.61177 34.7609 -0.242542 27.1724 2.27492C15.2343 6.23854 1.32814 16.3392 0.130395 41.7908C-2.0008 87.0408 22.2099 110.828 56.801 115.664C82.9488 119.32 100.583 92.1904 107.629 78.7416C111.248 71.9002 113.093 64.268 112.996 56.5375C112.698 38.9404 103.474 10.8539 50.7588 0.876332Z"
//       fill="url(#paint0_linear_216_479)"
//     />
//     <path
//       d="M78.2431 34.8907L38.2976 30.6743C30.8628 29.8896 25.5327 37.7147 28.9746 44.3648C30.3334 46.9912 31.0214 49.915 30.9772 52.875C30.9331 55.835 30.7636 58.2006 28.7214 61.3274C26.6792 64.4542 20.7402 71.6022 20.7402 71.6022C20.5873 71.8771 20.5048 72.1855 20.5 72.5C20.4952 72.8145 20.5682 73.1251 20.7125 73.4041C20.8569 73.6832 21.068 73.9219 21.3271 74.0989C21.5861 74.276 21.8851 74.3858 22.1971 74.4186C22.1971 74.4186 30.7296 73.9532 34.3093 73.4904C37.8889 73.0276 40.5059 74.9414 43.1337 76.7381C45.7614 78.5348 47.9034 80.9565 49.3683 83.7869C52.8189 90.4394 62.265 90.5672 65.9032 84.0086L85.4468 48.7982C86.1994 47.4398 86.605 45.9162 86.6273 44.3635C86.6495 42.8107 86.2878 41.2772 85.5743 39.8998C84.8609 38.5224 83.8179 37.3441 82.5387 36.47C81.2594 35.5959 79.7836 35.0533 78.2431 34.8907Z"
//       fill="black"
//     />
//     <path
//       d="M168.216 94.0377C161.879 94.0377 156.443 93.1038 151.907 91.2362C147.372 89.3685 143.936 86.9339 141.602 83.9324C139.334 80.8641 138.133 77.529 138 73.9271C138 73.3935 138.2 72.9266 138.6 72.5264C139.067 72.0595 139.601 71.826 140.201 71.826H152.808C153.608 71.826 154.242 71.9928 154.709 72.3263C155.242 72.5931 155.776 73.0267 156.31 73.627C157.177 75.3612 158.577 76.7953 160.512 77.9292C162.446 79.0632 165.014 79.6301 168.216 79.6301C172.018 79.6301 174.919 79.0298 176.92 77.8292C178.921 76.6286 179.922 74.9944 179.922 72.9266C179.922 71.4592 179.388 70.2586 178.321 69.3247C177.321 68.3909 175.72 67.5572 173.519 66.8234C171.317 66.0897 168.049 65.256 163.713 64.3221C155.709 62.6546 149.706 60.22 145.704 57.0183C141.769 53.7499 139.801 49.1142 139.801 43.1111C139.801 39.0423 140.935 35.407 143.203 32.2054C145.471 29.0037 148.706 26.5024 152.908 24.7014C157.11 22.9005 162.013 22 167.615 22C173.419 22 178.454 23.0005 182.723 25.0016C186.992 27.0026 190.227 29.5373 192.428 32.6056C194.696 35.6071 195.897 38.5753 196.03 41.5102C196.03 42.1105 195.83 42.6108 195.43 43.011C195.03 43.4112 194.53 43.6113 193.929 43.6113H180.722C179.922 43.6113 179.255 43.4779 178.721 43.2111C178.254 42.9443 177.821 42.5107 177.421 41.9104C177.02 40.3763 175.92 39.0756 174.119 38.0084C172.385 36.9412 170.217 36.4075 167.615 36.4075C164.614 36.4075 162.313 36.9412 160.712 38.0084C159.111 39.0756 158.311 40.6431 158.311 42.7108C158.311 44.1116 158.744 45.2789 159.611 46.2127C160.545 47.1465 162.013 48.0136 164.014 48.814C166.081 49.5477 169.016 50.3148 172.818 51.1152C179.021 52.2492 183.957 53.6832 187.626 55.4175C191.361 57.085 194.096 59.2862 195.83 62.0209C197.564 64.689 198.432 68.0574 198.432 72.1262C198.432 76.5952 197.131 80.4972 194.53 83.8323C191.995 87.1007 188.426 89.6354 183.824 91.4363C179.288 93.1705 174.086 94.0377 168.216 94.0377Z"
//       fill="currentColor"
//     />
//     <path
//       d="M233.959 94C220.152 94 213.248 87.4299 213.248 74.2897V55.0797H205.444C204.71 55.0797 204.076 54.8462 203.543 54.3793C203.076 53.9124 202.842 53.3121 202.842 52.5784V44.4742C202.842 43.7404 203.076 43.1401 203.543 42.6732C204.076 42.2063 204.71 41.9728 205.444 41.9728H213.248V24.4976C213.248 23.7639 213.481 23.1636 213.948 22.6967C214.482 22.2298 215.082 21.9963 215.749 21.9963H227.355C228.089 21.9963 228.689 22.2298 229.156 22.6967C229.623 23.1636 229.857 23.7639 229.857 24.4976V41.9728H242.363C243.097 41.9728 243.697 42.2063 244.164 42.6732C244.698 43.1401 244.964 43.7404 244.964 44.4742V52.5784C244.964 53.3121 244.698 53.9124 244.164 54.3793C243.697 54.8462 243.097 55.0797 242.363 55.0797H229.857V72.889C229.857 77.8249 231.758 80.2929 235.56 80.2929H243.264C243.997 80.2929 244.598 80.5263 245.065 80.9932C245.531 81.4601 245.765 82.0605 245.765 82.7942V91.4987C245.765 92.1657 245.531 92.766 245.065 93.2997C244.598 93.7666 243.997 94 243.264 94H233.959Z"
//       fill="currentColor"
//     />
//     <path
//       d="M269.066 94.0377C265.531 94.0377 262.296 93.3706 259.361 92.0366C256.493 90.6359 254.225 88.7682 252.558 86.4337C250.957 84.0324 250.156 81.3977 250.156 78.5296C250.156 73.9272 252.024 70.2252 255.759 67.4238C259.561 64.6223 264.764 62.6879 271.367 61.6207L283.874 59.7197V58.319C283.874 55.7843 283.34 53.9167 282.273 52.7161C281.206 51.5154 279.405 50.9151 276.87 50.9151C275.336 50.9151 274.069 51.1819 273.068 51.7155C272.068 52.2492 271.034 52.9829 269.967 53.9167C269.033 54.7171 268.332 55.2507 267.866 55.5175C267.665 56.0511 267.299 56.318 266.765 56.318H255.859C255.192 56.318 254.625 56.1179 254.158 55.7176C253.758 55.2507 253.591 54.7171 253.658 54.1168C253.725 52.3159 254.592 50.3148 256.259 48.1137C257.994 45.9125 260.595 44.0115 264.064 42.4107C267.599 40.8098 271.934 40.0094 277.07 40.0094C285.275 40.0094 291.344 41.8437 295.28 45.5123C299.215 49.1142 301.183 53.9834 301.183 60.1199V91.5364C301.183 92.2034 300.95 92.8037 300.483 93.3373C300.016 93.8042 299.415 94.0377 298.682 94.0377H287.076C286.409 94.0377 285.808 93.8042 285.275 93.3373C284.808 92.8037 284.574 92.2034 284.574 91.5364V87.034C283.107 89.1018 281.039 90.8026 278.371 92.1367C275.77 93.404 272.668 94.0377 269.066 94.0377ZM273.769 82.6317C276.837 82.6317 279.305 81.6312 281.173 79.6301C283.107 77.6291 284.074 74.6942 284.074 70.8255V69.4248L275.57 70.9256C269.566 71.9928 266.565 74.0939 266.565 77.2289C266.565 78.8964 267.265 80.2304 268.666 81.231C270.067 82.1648 271.768 82.6317 273.769 82.6317Z"
//       fill="currentColor"
//     />
//     <path
//       d="M311.077 94.0141C310.343 94.0141 309.743 93.7806 309.276 93.3137C308.809 92.8468 308.576 92.2465 308.576 91.5127V44.5179C308.576 43.7842 308.809 43.1839 309.276 42.7169C309.743 42.25 310.343 42.0166 311.077 42.0166H322.583C323.317 42.0166 323.917 42.2834 324.384 42.817C324.918 43.2839 325.184 43.8509 325.184 44.5179V48.52C328.853 44.1844 333.789 42.0166 339.992 42.0166H344.394C345.128 42.0166 345.728 42.25 346.195 42.7169C346.662 43.1839 346.896 43.7842 346.896 44.5179V54.8233C346.896 55.4903 346.662 56.0906 346.195 56.6242C345.728 57.0911 345.128 57.3246 344.394 57.3246H334.689C331.955 57.3246 329.82 58.0916 328.286 59.6258C326.819 61.0932 326.085 63.4064 326.085 66.1412V91.5127C326.085 92.2465 325.818 92.8468 325.284 93.3137C324.818 93.7806 324.217 94.0141 323.484 94.0141H311.077Z"
//       fill="currentColor"
//     />
//     <path
//       d="M382.426 94.0342C368.619 94.0342 361.715 87.4641 361.715 74.3239V54.9881H353.911C353.177 54.9881 352.544 54.7547 352.01 54.2877C351.543 53.8208 351.31 53.2205 351.31 52.4868V44.3826C351.31 43.6489 351.543 43.0485 352.01 42.5816C352.544 42.1147 353.177 41.8813 353.911 41.8813H361.715V24.5013C361.715 23.7676 361.948 23.1673 362.415 22.7004C362.949 22.2335 363.549 22 364.216 22H375.822C376.556 22 377.156 22.2335 377.623 22.7004C378.09 23.1673 378.324 23.7676 378.324 24.5013V41.8813H390.83C391.564 41.8813 392.164 42.1147 392.631 42.5816C393.165 43.0485 393.432 43.6489 393.432 44.3826V52.4868C393.432 53.2205 393.165 53.8208 392.631 54.2877C392.164 54.7547 391.564 54.9881 390.83 54.9881H378.324V72.9231C378.324 77.859 380.225 80.327 384.027 80.327H391.731C392.464 80.327 393.065 80.5604 393.532 81.0274C393.998 81.4943 394.232 82.0946 394.232 82.8283V91.5329C394.232 92.1999 393.998 92.8002 393.532 93.3338C393.065 93.8007 392.464 94.0342 391.731 94.0342H382.426Z"
//       fill="currentColor"
//     />
//     <path
//       d="M449.293 94.0377C439.888 94.0377 432.517 91.7365 427.181 87.134C421.912 82.5316 419.277 75.5947 419.277 66.3232V24.5439C419.277 23.8101 419.51 23.2098 419.977 22.7429C420.511 22.276 421.111 22.0426 421.778 22.0426H434.685C435.419 22.0426 436.019 22.276 436.486 22.7429C437.02 23.2098 437.286 23.8101 437.286 24.5439V66.2231C437.286 70.5587 438.287 73.8271 440.288 76.0282C442.356 78.1627 445.324 79.2299 449.193 79.2299C452.995 79.2299 455.929 78.1293 457.997 75.9282C460.065 73.727 461.099 70.492 461.099 66.2231V24.5439C461.099 23.8101 461.332 23.2098 461.799 22.7429C462.333 22.276 462.933 22.0426 463.6 22.0426H476.607C477.341 22.0426 477.941 22.276 478.408 22.7429C478.875 23.2098 479.108 23.8101 479.108 24.5439V66.3232C479.108 75.5947 476.44 82.5316 471.104 87.134C465.835 91.7365 458.564 94.0377 449.293 94.0377Z"
//       fill="currentColor"
//     />
//     <path
//       d="M495.492 94.0341C494.825 94.0341 494.224 93.8006 493.691 93.3337C493.224 92.8001 492.99 92.1998 492.99 91.5328V24.5439C492.99 23.8101 493.224 23.2098 493.691 22.7429C494.224 22.276 494.825 22.0426 495.492 22.0426H508.899C509.632 22.0426 510.233 22.276 510.7 22.7429C511.233 23.2098 511.5 23.8101 511.5 24.5439V91.5328C511.5 92.2665 511.233 92.8668 510.7 93.3337C510.233 93.8006 509.632 94.0341 508.899 94.0341H495.492Z"
//       fill="currentColor"
//     />
//     <path
//       d="M565.176 73.0001H571.937L577.179 55.358H577.406L582.647 73.0001H589.423L597.875 43.9092H590.119L585.716 63.0143H585.474L580.46 43.9092H574.125L569.111 62.9717H568.869L564.48 43.9092H556.71L565.176 73.0001Z"
//       fill="currentColor"
//     />
//     <path
//       d="M600.78 73.0001H621.064V67.2899H607.811V61.3097H620.027V55.5853H607.811V49.6194H621.064V43.9092H600.78V73.0001Z"
//       fill="currentColor"
//     />
//     <path
//       d="M625.467 73.0001H638.521C644.956 73.0001 648.649 69.5626 648.649 64.8609C648.649 60.6563 645.595 58.0143 642.072 57.858V57.574C645.268 56.9063 647.513 54.591 647.513 51.2671C647.513 46.8779 644.132 43.9092 637.598 43.9092H625.467V73.0001ZM632.498 67.3325V60.4007H636.973C639.657 60.4007 641.305 61.8211 641.305 64.0512C641.305 66.1109 639.885 67.3325 636.845 67.3325H632.498ZM632.498 55.8694V49.4916H636.504C638.848 49.4916 640.339 50.699 640.339 52.6308C640.339 54.6762 638.691 55.8694 636.39 55.8694H632.498Z"
//       fill="currentColor"
//     />
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M660 27H546C543.239 27 541 29.2386 541 32V84C541 86.7614 543.239 89 546 89H660C662.761 89 665 86.7614 665 84V32C665 29.2386 662.761 27 660 27ZM546 22C540.477 22 536 26.4772 536 32V84C536 89.5229 540.477 94 546 94H660C665.523 94 670 89.5229 670 84V32C670 26.4772 665.523 22 660 22H546Z"
//       fill="currentColor"
//     />
//     <defs>
//       <linearGradient
//         id="paint0_linear_216_479"
//         x1="56.4989"
//         y1="0.000458122"
//         x2="56.4989"
//         y2="116"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#FCD34D" />
//         <stop offset="1" stopColor="#F59E0B" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

const logo = <>$wayam</>;
const head = (
  <>
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta
      name="description"
      content="One stop for dev who loves to code and write blogs."
    />
    <meta
      name="og:description"
      content="Swayam Terode's personal blog and DSA revision notes."
    />
  </>
);

const config: DocsThemeConfig = {
  logo,
  primaryHue: { dark: 45, light: 200 },
  primarySaturation: { dark: 80, light: 50 },
  project: {
    link: "https://github.com/swayamterode",
  },
  chat: {
    link: "https://www.linkedin.com/in/swayamterode/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0H4C1.8 0 0 1.8 0 4V20C0 22.2 1.8 24 4 24H20C22.2 24 24 22.2 24 20V4C24 1.8 22.2 0 20 0ZM7.5 20H4.5V9H7.5V20ZM6 7.5C4.8 7.5 3.75 6.45 3.75 5.25C3.75 4.05 4.8 3 6 3C7.2 3 8.25 4.05 8.25 5.25C8.25 6.45 7.2 7.5 6 7.5ZM20 20H17V14.85C17 13.35 16.5 12.75 15.25 12.75C14.09 12.75 13.5 13.65 13.5 14.85V20H10.5V9H13.5V10.65C14.1 9.75 15 9 16.25 9C18.55 9 20 10.35 20 13.65V20Z" />
      </svg>
    ),
  },
  feedback: {
    content: () => null,
  },

  docsRepositoryBase: "https://github.com/swayamterode",
  useNextSeoProps: () => {
    const { route } = useRouter();
    const titleTemplate = route === "/" ? "DSA ka 14" : "%s -$wayam";
    return {
      titleTemplate,
    };
  },
  head,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
    backToTop: true,
  },
  footer: {
    text: () => (
      <div className="flex">
        <p>© {new Date().getFullYear()} $wayam 🚀</p>
      </div>
    ),
  },

  banner: {
    key: "beta-release",
    text: (
      <a
        href="https://github.com/swayamterode"
        target="_blank"
        rel="noreferrer"
      >
        See my work on GitHub ⚒️
      </a>
    ),
  },

  editLink: {
    component: () => null,
  },
};

export default config;
