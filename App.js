import { View, Text } from 'react-native'
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowData from './ShowData';
import ShowAnother from './dummy';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowData />
    </QueryClientProvider>
  )
}

export default App