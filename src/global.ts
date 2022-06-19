import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html, body {
        /* box model */
        margin: 0; 
        padding: 0;1700

        /* visual decorations */
    }

    *, *::after, *::before {
        /* box model */
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        text-rendering: optimizeLegibility;
    }

    body > div {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1500' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1093&quot;)' fill='none'%3E%3Cpath d='M 0,112 C 100,135 300,226.4 500,227 C 700,227.6 800,106 1000,115 C 1200,124 1300,283.6 1500,272 C 1700,260.4 1900,100 2000,57L2000 1300L0 1300z' fill='rgba(175, 183, 193, 1)'%3E%3C/path%3E%3Cpath d='M 0,477 C 133.4,486.4 400.2,542 667,524 C 933.8,506 1067.4,368.8 1334,387 C 1600.6,405.2 1866.8,569.4 2000,615L2000 1300L0 1300z' fill='rgba(188, 177, 192, 1)'%3E%3C/path%3E%3Cpath d='M 0,700 C 100,741.8 300,892.8 500,909 C 700,925.2 800,786.6 1000,781 C 1200,775.4 1300,889 1500,881 C 1700,873 1900,769 2000,741L2000 1300L0 1300z' fill='rgba(176, 193, 181, 1)'%3E%3C/path%3E%3Cpath d='M 0,1266 C 80,1224.8 240,1083 400,1060 C 560,1037 640,1137.4 800,1151 C 960,1164.6 1040,1122.8 1200,1128 C 1360,1133.2 1440,1188.6 1600,1177 C 1760,1165.4 1920,1091.4 2000,1070L2000 1300L0 1300z' fill='rgba(201, 209, 215, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1093'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
        background-size: cover;
        background-repeat: no-repeat;
    }
    
`;
