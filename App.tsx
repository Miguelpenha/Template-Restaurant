import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from './theme'
import { ListProvider } from './contexts/listContext'
import { LocationProvider } from './contexts/locationContext'
import { OrdersProvider } from './contexts/ordersContext'
import Routes from './routes'

function App() {
  const [pronto, setPronto] = useState(false)
  
  useEffect(() => {
    updateApp().then()
    setPronto(true)
  }, [])
  
  if (!pronto) {
    return <AppLoading/>
  } else {
    console.log(green('>> App Started'))

    return (
      <ThemeProvider>
        <ListProvider>
          <LocationProvider>
            <OrdersProvider>
              <Routes/>
            </OrdersProvider>
          </LocationProvider>
        </ListProvider>
      </ThemeProvider>
    )
  }
}

export default App