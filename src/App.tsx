import React from 'react';
import MainLayout from './components/layout/layout'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import ApolloContainer from './apollo/index'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloContainer/>
      <MainLayout/>
    </ApolloProvider>
  );
}

export default App;
