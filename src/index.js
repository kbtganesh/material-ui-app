import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/Main';
import Setting from './pages/Setting';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
// import './start-service-worker'

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Router>
    <App>
        <Route path="/setting" component={Setting} />
        <Route exact path="/" component={Main} />
    </App>
</Router>, document.getElementById('root'));

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./sw.js').then(function onRegister(registration) {
//     // Registration was successful
//     console.log('ServiceWorker registration successful with scope: ', registration.scope)
//   }).catch(function onRegistrationFailure(err) {
//     // registration failed :(
//     console.error('ServiceWorker f registration failed: ', err)
//   })
// } else {
//   console.log('You can not have nice things :-(')
// }

if ('serviceWorker' in navigator) {
// window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sww.js')
    .then((worker)=> {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', worker );
    }).catch(error=>{
      console.log('ServiceWorker registration failed: ', error);
    })
  // });
// registerServiceWorker();
}


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       // const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
//       navigator.serviceWorker
//         .register('./sw.js')
//         .then(registration => {
//           console.log("Registration kbt");
//           registration.onupdatefound = () => {
//             console.log("heyoye");
//             const installingWorker = registration.installing;
//             installingWorker.onstatechange = () => {
//               console.log("hey1");
//               if (installingWorker.state === 'installed') {
//                 console.log("hey2");
//                 if (navigator.serviceWorker.controller) {
//                   // At this point, the old content will have been purged and
//                   // the fresh content will have been added to the cache.
//                   // It's the perfect time to display a "New content is
//                   // available; please refresh." message in your web app.
//                   console.log('New content is available; please refresh.');
//                 } else {
//                   // At this point, everything has been precached.
//                   // It's the perfect time to display a
//                   // "Content is cached for offline use." message.
//                   console.log('Content is cached for offline use.');
//                 }
//               }
//             };
//           };
//         })
//         .catch(error => {
//           console.error('Error during service worker registration:', error);
//         });
//     });
//   }
