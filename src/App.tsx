import Routes from './routes'
import store from './redux/store'
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
