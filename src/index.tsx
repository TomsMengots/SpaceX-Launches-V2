import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'src/App';

import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import 'src/styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
