/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
<App />
</FirebaseContext.Provider>,
document.getElementById('root'),
);
serviceWorker.unregister();



const SomeComponent = () => (
<FirebaseContext.Consumer>
{firebase => {
return <div>I've access to Firebase and render something.</div>;
}}
</FirebaseContext.Consumer>
);
export default SomeComponent;