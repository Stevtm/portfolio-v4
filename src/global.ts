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
    }

    body > div {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1300' preserveAspectRatio='none' viewBox='0 0 2000 1300'%3E%3Cg mask='url(&quot;%23SvgjsMask1113&quot;)' fill='none'%3E%3Cpath d='M 0,96 C 133.4,85 400.2,45.6 667,41 C 933.8,36.4 1067.4,77.4 1334,73 C 1600.6,68.6 1866.8,29.8 2000,19L2000 1300L0 1300z' fill='rgba(10, 25, 166, 0)'%3E%3C/path%3E%3Cpath d='M 0,166 C 100,183 300,252.2 500,251 C 700,249.8 800,167.6 1000,160 C 1200,152.4 1300,209.8 1500,213 C 1700,216.2 1900,183.4 2000,176L2000 1300L0 1300z' fill='rgba(206, 214, 219, 1)'%3E%3C/path%3E%3Cpath d='M 0,262 C 66.8,286.8 200.4,386.4 334,386 C 467.6,385.6 534.4,267 668,260 C 801.6,253 868.4,347.4 1002,351 C 1135.6,354.6 1202.4,277.4 1336,278 C 1469.6,278.6 1537.2,353.4 1670,354 C 1802.8,354.6 1934,295.6 2000,281L2000 1300L0 1300z' fill='rgba(206, 214, 219, 1)'%3E%3C/path%3E%3Cpath d='M 0,469 C 133.4,456.4 400.2,401.4 667,406 C 933.8,410.6 1067.4,491.4 1334,492 C 1600.6,492.6 1866.8,425.6 2000,409L2000 1300L0 1300z' fill='rgba(206, 214, 219, 1)'%3E%3C/path%3E%3Cpath d='M 0,623 C 133.4,607.8 400.2,551 667,547 C 933.8,543 1067.4,606.6 1334,603 C 1600.6,599.4 1866.8,543.8 2000,529L2000 1300L0 1300z' fill='rgba(207, 218, 210, 1)'%3E%3C/path%3E%3Cpath d='M 0,778 C 133.4,758.2 400.2,688.8 667,679 C 933.8,669.2 1067.4,729.4 1334,729 C 1600.6,728.6 1866.8,687.4 2000,677L2000 1300L0 1300z' fill='rgba(207, 218, 210, 1)'%3E%3C/path%3E%3Cpath d='M 0,871 C 80,860.2 240,818.6 400,817 C 560,815.4 640,869 800,863 C 960,857 1040,788.6 1200,787 C 1360,785.4 1440,849.8 1600,855 C 1760,860.2 1920,821.4 2000,813L2000 1300L0 1300z' fill='rgba(207, 218, 210, 1)'%3E%3C/path%3E%3Cpath d='M 0,950 C 133.4,962 400.2,1016.8 667,1010 C 933.8,1003.2 1067.4,918.4 1334,916 C 1600.6,913.6 1866.8,981.6 2000,998L2000 1300L0 1300z' fill='rgba(207, 218, 210, 1)'%3E%3C/path%3E%3Cpath d='M 0,1113 C 66.8,1109.8 200.4,1090 334,1097 C 467.6,1104 534.4,1151.2 668,1148 C 801.6,1144.8 868.4,1078.8 1002,1081 C 1135.6,1083.2 1202.4,1165.2 1336,1159 C 1469.6,1152.8 1537.2,1052.2 1670,1050 C 1802.8,1047.8 1934,1128.4 2000,1148L2000 1300L0 1300z' fill='rgba(215, 208, 217, 1)'%3E%3C/path%3E%3Cpath d='M 0,1203 C 80,1219.4 240,1284.8 400,1285 C 560,1285.2 640,1209 800,1204 C 960,1199 1040,1255.4 1200,1260 C 1360,1264.6 1440,1220.2 1600,1227 C 1760,1233.8 1920,1280.6 2000,1294L2000 1300L0 1300z' fill='rgba(215, 208, 217, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1113'%3E%3Crect width='2000' height='1300' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
        background-size: cover;
        background-repeat: no-repeat;
    }
    
`;
