import React, {Component} from 'react';
import header from './Components/header';
import form from './Components/form';
import results from './Components/results';
import footer from './Components/footer'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
      super()
        this.state = {
          prog: []
        }
  }


componentDidMount() {
  axios.get('/api/prog')
  .then(res => {
    this.setState({
      prog: res.data
    })
  })
}

render() {
  console.log(this.state.prog)
  return (
    <div>
      <h2>Progesterone</h2>
    </div>
  )
  
}

}
export default App;
