import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

import { queryClient } from "./infra/query/client";
import { Example } from "./modules/example";

import useTheme from "./stores/useTheme";

import { GlobalStyle } from "./ui/styles/GlobalStyle";
import DarkTheme from "./ui/themes/Dark";
import LightTheme from "./ui/themes/Light";


function App() {

    const theme = useTheme(state => state.theme);

    const isDarkTheme = theme === "dark";

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme} >
                <Header />
                <Example />
                <GlobalStyle />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
