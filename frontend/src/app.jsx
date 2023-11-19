import React from "react"
import 'app.css'
import PageRouter from "modules/pageRouter"
import {QueryClient, QueryClientProvider} from "react-query"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1,
      // cacheTime: 0,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageRouter />
    </QueryClientProvider>
  )
}

