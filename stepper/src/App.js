import 'styles/global.css';

import { Stepper } from 'components';

function App() {
  return (
    <div className="App">
      <Stepper id="stepper-desc" mode="vertical"/>
      <Stepper id="stepper-desc" mode="horizontal"/>
    </div>
  );
}

export default App;
