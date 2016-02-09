import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
//import App from './containers/App'
import FilterBar from './components/FilterBar'
import ListContainer from './containers/ListContainer'
import 'bulma/css/bulma.css'
import styles from './app.css'

import { addMessage } from './actions/log'

import { ipcRenderer } from 'electron'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <div className={styles.list}>
        <ListContainer />
      </div>
      <div className={styles.filterbar}>
        <FilterBar />
      </div>
      {
        (() => {
          //if (process.env.NODE_ENV !== 'production') {
            //const DevTools = require('./DevTools');
            //return <DevTools />;
          //}
        })()
      }
    </div>
  </Provider>,
  document.getElementById('root')
)

ipcRenderer.on('logs', (e, m) => {
  if (m !== '') {
    store.dispatch(addMessage(m))
  }
})

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store)
}
