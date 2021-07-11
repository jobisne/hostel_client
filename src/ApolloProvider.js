import React from 'react';
import App from "./App";
import  ApolloClient from "apollo-client";
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { setContext } from 'apollo-link-context';

const httpLink = createUploadLink({
  uri: `https://fast-eyrie-13923.herokuapp.com/graphql`,
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken')
  return{
    headers:{
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([
    // Report errors to console in a user friendly format
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
   authLink.concat(httpLink) ,
  ]),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
