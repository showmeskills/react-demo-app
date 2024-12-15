import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import "../public/assets/reset.css";

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement); 
root.render( 
  <Provider store={store}>
    <App />
  </Provider>,
);

