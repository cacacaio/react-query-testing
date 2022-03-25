import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { handleError } from './src/global/utils/handleError';

import { Routes } from './src/routes/Router';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 20000,
        onError: handleError,
        retry: false,
      },
      mutations: {
        onError: handleError,
      },
    },
  });

  setLogger({
    log: () => null,
    warn: () => null,
    error: () => null,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <StatusBar style="light" hidden />
    </QueryClientProvider>
  );
};

export default App;
