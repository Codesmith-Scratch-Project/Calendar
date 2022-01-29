import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import MainContainer from './containers/MainContainer.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MainContainer />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));