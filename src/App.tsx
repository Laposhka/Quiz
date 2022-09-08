import allRoutes, { renderRoutes } from './routes';
import store from './redux/store'
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {renderRoutes(allRoutes)}
    </Provider>
  );
}

export default App;
