import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode} from "react";

const ReactQueryProvider = ( {children}: {children:ReactNode}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 5*60*1000,
            },
        }
    })
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        )
}

export default ReactQueryProvider