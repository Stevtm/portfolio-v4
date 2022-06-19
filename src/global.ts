import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html, body {
        /* box model */
        margin: 0; 
        padding: 0;

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

        // background-color: "#fffcf2";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3000' height='1300' preserveAspectRatio='none' viewBox='0 0 3000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1044&quot;)' fill='none'%3E%3Cpath d='M 0,189 C 200,153.8 600,-3.8 1000,13 C 1400,29.8 1600,253.4 2000,273 C 2400,292.6 2800,143.4 3000,111L3000 1300L0 1300z' fill='rgba(175, 183, 193, 1)'%3E%3C/path%3E%3Cpath d='M 0,567 C 200,540.8 600,421.4 1000,436 C 1400,450.6 1600,642.8 2000,640 C 2400,637.2 2800,465.6 3000,422L3000 1300L0 1300z' fill='rgba(188, 177, 192, 1)'%3E%3C/path%3E%3Cpath d='M 0,900 C 120,865.8 360,745.6 600,729 C 840,712.4 960,823 1200,817 C 1440,811 1560,669.6 1800,699 C 2040,728.4 2160,949 2400,964 C 2640,979 2880,812 3000,774L3000 1300L0 1300z' fill='rgba(176, 193, 181, 1)'%3E%3C/path%3E%3Cpath d='M 0,1129 C 100,1144.2 300,1212.2 500,1205 C 700,1197.8 800,1084.6 1000,1093 C 1200,1101.4 1300,1243.4 1500,1247 C 1700,1250.6 1800,1103.6 2000,1111 C 2200,1118.4 2300,1299.4 2500,1284 C 2700,1268.6 2900,1084 3000,1034L3000 1300L0 1300z' fill='rgba(201, 209, 215, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1044'%3E%3Crect width='3000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
        background-size: cover;
        background-repeat: no-repeat;
    }
    
`;
