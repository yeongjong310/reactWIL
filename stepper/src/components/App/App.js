import './App.css';

import { Component } from 'react';
import { Stepper } from 'components';

export class App extends Component {
  state = {
    mode: 'horizontal'
  }

  handleSwapMode = () => {
    this.setState(
      ({mode}) => ({ mode: mode === 'horizontal' ? 'vertical' : 'horizontal' })
    );
  }

  render() {
    const modeStyle = {
      position: 'fixed',
      top:'80px',
      right: '50px',
      width: '50px',
      height: '50px',
      borderRadius: '25px',
      boxShadow: '0px 0px 10px rgb(1 126 155 / 30%), 0px 4px 3px rgb(1 126 155 / 20%)',
      marginRight: '20px',
      color: '#009CC1'
    }
    return (
      <>
        <button 
            style={modeStyle}
            onClick={() => {this.handleSwapMode()}}
        >
          MODE
        </button>
        <div className="App">
          <Stepper id="stepper-desc" mode={this.state.mode}/>
        </div>
      </>
    );
  }
}

export default App;
