import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/im-fell-english/400.css';
import '@fontsource/old-standard-tt/400.css';
import '@fontsource/old-standard-tt/700.css';
import '@fontsource/pinyon-script/400.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
