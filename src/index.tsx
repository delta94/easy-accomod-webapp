import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './theme/font.css'
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import App from './routes'
import reportWebVitals from './reportWebVitals'
import theme from './theme/theme'
import { persistor, store } from './store/configureStore'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const onBeforeLift = () => {
  // take some action before the gate lifts
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
