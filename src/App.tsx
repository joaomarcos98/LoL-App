import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryClient } from "./infra/query/client";
import { Example } from "./modules/example";
import { GlobalStyle } from "./ui/styles/GlobalStyle";
import LightTheme from "./ui/themes/Light";


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={LightTheme} >
                <Example />
                <GlobalStyle />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
