import { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apollo } from 'src/infrastructure/apollo';
import { createRoot } from 'react-dom/client';
import App from 'src/App';
import 'src/styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
