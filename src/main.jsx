import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, split} from '@apollo/client';
import {baseURL} from "./api/api.jsx";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {getMainDefinition} from "@apollo/client/utilities";
import {NotificationProvider} from "./context/notificationContext.jsx";

const wsLink = new WebSocketLink(
    new SubscriptionClient('ws://localhost:3000/graphql', {
        // connectionParams: {
        //     authToken: user.authToken
        // }
    })
);
const httpLink = new HttpLink({
    uri: baseURL
});
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);
const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    defaultOptions : {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NotificationProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </NotificationProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
