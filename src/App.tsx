import { QueryClientProvider } from "react-query";

import { queryClient } from "./infra/query/client";
import { Example } from "./modules/example";
import { GlobalStyle } from "./ui/styles/GlobalStyle";


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Example />
            <GlobalStyle/>
        </QueryClientProvider>
    )
}

export default App
