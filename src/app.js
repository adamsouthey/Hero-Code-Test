import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      resp: null
    };
  }

  componentDidMount() {
    Axios
    .get('https://dev.backend.usehero.com/products/887447521318', {
      header: {
        "x-hero-merchant-id": 'iWU4p9dJ9m'
      }
    }
  )
  .then(res => {
    const resp = res.data;
    console.log(resp);
    this.setState({resp});
  })
  .catch(err => console.log(err));
}

render() {
  return(
    <div>
      <h1>Hello</h1>
    </div>

  )}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
