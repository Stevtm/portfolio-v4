// import modules
import { ThemeProvider } from "styled-components";

// import theme and global style
import { GlobalStyles } from "../global";
import { theme } from "../theme";
import { AppBody } from "./styles";

// import components
import Nav from "../components/Nav";
import Title from "../components/Title";
import About from "../components/About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBody>
        <GlobalStyles />
        <Nav />
        <Title />
        <About />
        <Portfolio />
        <Resume />
        <Footer />
      </AppBody>
    </ThemeProvider>
  );
};

export default App;
