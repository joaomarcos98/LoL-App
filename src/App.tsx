import { QueryClientProvider } from "react-query";

import { queryClient } from "./infra/query/client";
import { Example } from "./modules/example";


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

export default App
