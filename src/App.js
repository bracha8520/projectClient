import logo from './logo.svg';
import './App.css';
import Login from './login'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div className="App">

      <div className='heder'>login</div>
      <Provider store={store}>
        <Login />
      </Provider>
      {/* <div className="futer"></div> */}

    </div>
  );
}

export default App;
