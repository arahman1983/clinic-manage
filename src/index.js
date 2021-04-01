import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './mainStyle.css';
import App from './App';
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import './i18n';


const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ 'loading' }>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
