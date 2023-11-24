import React from "react"
import 'app.css'
import PageRouter from "modules/pageRouter"
import {QueryClient, QueryClientProvider} from "react-query"
import NavBar from "modules/pages/navBar"

import {Auth0Provider} from '@auth0/auth0-react'
import {ROOT_NAME} from "modules/api/axios"

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
    <Auth0Provider
      domain="jamiema.us.auth0.com"
      clientId="RIMqxeK6DFOMcf1Z3zzMdJCBmkKWfZgG"
      authorizationParams={{
        redirect_uri: ROOT_NAME
      }}
    >
      <QueryClientProvider client={queryClient}>
        <NavBar></NavBar>
        <PageRouter />
      </QueryClientProvider>
    
    </Auth0Provider>
  )
}

