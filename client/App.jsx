import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'




class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <h1>Welcome to Calendar</h1>;
  }
}

const mid = applyMiddleware(thunk)
const composedEnhancers = compose(mid, composeWithDevTools())
const store = createStore(reducer, undefined, composedEnhancers);

// store.subscribe(() => {
//   console.log('current state', store.getState());
// });

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});


ReactDOM.render(
<Provider store={store}>


<App />
</Provider>,

document.getElementById('root'));